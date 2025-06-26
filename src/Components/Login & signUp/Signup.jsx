import React, { use, useEffect } from 'react';
import { Link } from 'react-router';
import Swal from 'sweetalert2';
import { FcGoogle } from "react-icons/fc";
import { AuthContext_File } from '../../Authcontext/AuthProvider';
import { toast, ToastContainer } from 'react-toastify';
import { useLocation } from 'react-router';
import { useNavigate } from 'react-router';

const Signup = () => {

  // dynamic Name write 
  useEffect(() => {
    document.title = 'Sign Up'
  })
  const location = useLocation()
  // console.log(location)
  const navigate = useNavigate()

  const { createUser, signInWithGoogle, user } = use(AuthContext_File)

  console.log("Login in User Information", user);

  // users information send to the Database system 
  const handleAddNewUser = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const newUser = Object.fromEntries(formData.entries())


    const email = e.target.email.value
    const password = e.target.password.value
    createUser(email, password).then(() => {

    }).catch((error) => {
      console.log(error)
    })
    // toast("Successfully Log in Done ✅");


    // Optional: Send taskData to your backend New User Data Store to the Database
    fetch('https://frelancer-server.vercel.app/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newUser),
    })
      .then(res => res.json())
      .then(data => {
        if (data.insertedId) {
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'New User Added successfully',
            showConfirmButton: false,
            timer: 1500,
          });
        }
        setTimeout(() => {
          navigate(`${location.state ? location.state : '/login'}`);
        }, 1000);
      })
  }

  // Password validation function
  const isValidPassword = (password) => {
    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    const isLongEnough = password.length >= 8;
    return hasUppercase && hasLowercase && isLongEnough;
  };

  //Google lOg in user information Store to the Database 
  const signInGoogle = () => {
    signInWithGoogle()
      .then((result) => {
        // The signed-in user info.
        const user = result.user;
        console.log('Google User:', user);
        toast.success("Successfully create account  with Google ✅");
        fetch('https://frelancer-server.vercel.app/users', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: user.displayName,
            email: user.email,
            photoUrl: user.photoURL
          }),
        })
          .then(res => res.json())
          .then(data => {
            if (data.insertedId) {
              Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'New User Added successfully',
                showConfirmButton: false,
                timer: 1500,
              });
            }
          })

        setTimeout(() => {
          navigate(`${location.state ? location.state : '/'}`);
        }, 2000);
      })
      .catch((error) => {
        console.error('Google sign-in error:', error);
        toast.error("Google Sign-in failed ❌");
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <ToastContainer />
      <div className="max-w-md w-full bg-white p-8 rounded-2xl shadow-md">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Create an Account</h2>
        <form
          onSubmit={e => {
            const password = e.target.password.value;
            if (!isValidPassword(password)) {
              e.preventDefault();
              Swal.fire({
                icon: 'error',
                title: 'Invalid Password',
                text: 'Password must be at least 8 characters and contain both uppercase and lowercase letters.',
              });
              return;
            }
            handleAddNewUser(e);
          }}
          className="space-y-4"
        >
          <div>
            <label className="block text-gray-600 text-sm mb-1">Full Name</label>
            <input
              name="name"
              type="text"
              placeholder="Your name"
              required
              className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div>
            <label className="block text-gray-600 text-sm mb-1">Photo URL</label>
            <input
              name="photoUrl"
              type="url"
              placeholder="https://example.com/photo.jpg"
              className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
              required />
          </div>
          <div>
            <label className="block text-gray-600 text-sm mb-1">Email</label>
            <input
              name="email"
              type="email"
              required
              placeholder="you@example.com"
              className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div>
            <label className="block text-gray-600 text-sm mb-1">Password</label>
            <input
              name="password"
              type="password"
              required
              placeholder="••••••••"
              className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-xl hover:bg-blue-600 transition"
          >
            Sign Up
          </button>
        </form>
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600 mb-2">Or Log in with</p>
          <button
            onClick={signInGoogle}
            className="w-full flex items-center justify-center space-x-2 text-black bg-white py-2 rounded-xl border border-gray-300 hover:shadow-md transition"
          >
            <FcGoogle />
            <span>Sign in with Google</span>
          </button>
        </div>
        <p className="mt-4 text-center text-sm text-gray-600">
          Already have an account?{' '}
          <Link to="/login" className="text-blue-500 hover:underline">
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;