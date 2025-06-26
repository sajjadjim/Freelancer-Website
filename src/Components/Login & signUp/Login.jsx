import React, { use, useEffect } from 'react';
import { Link } from 'react-router';
import { FcGoogle } from "react-icons/fc";
import { ToastContainer, toast } from 'react-toastify';
import { AuthContext_File } from '../../Authcontext/AuthProvider';
import { useLocation } from 'react-router';
import { useNavigate } from 'react-router';
const Login = () => {
  useEffect(() => {
    document.title = 'Login|Page'
  })

  const location = useLocation()
  // console.log(location)
  const navigate = useNavigate()

  const { signIn, signInWithGoogle } = use(AuthContext_File)
  // log in handle control frunction here
  const handleLogIn = (e) => {
    e.preventDefault()
    const email = e.target.email.value
    const password = e.target.password.value
    // console.log(email, password)
    signIn(email, password).then(() => {

    }).catch((error) => {
      alert(error.message)
    })
    toast("Successfully Log in Done ✅");
    setTimeout(() => {
      navigate(`${location.state ? location.state : '/'}`);
    }, 1000);
  }
  // --------------------------------------------------------
  // sign in with google here part code ----------------------
  const signInGoogle = () => {
    signInWithGoogle()
      .then((result) => {
        // The signed-in user info.
        const user = result.user;
        console.log('Google User:', user);
        toast.success("Signed in with Google ✅");
        setTimeout(() => {
          navigate(`${location.state ? location.state : '/'}`);
        }, 1000);
      })
      .catch((error) => {
        console.error('Google sign-in error:', error);
        toast.error("Google Sign-in failed ❌");
      });
  };

  return (

    <div>
      <div className="min-h-screen flex items-center justify-center  px-4">
        <ToastContainer />
        <div className="max-w-md w-full bg-white p-8 rounded-2xl shadow-md">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Login</h2>
          <form onSubmit={handleLogIn} className="space-y-4">
            <div>
              <label className="block text-gray-600 text-sm mb-1">Email</label>
              <input
                type="email"
                name='email'
                placeholder="you@example.com"
                className="w-full text-black px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div>
              <label className="block text-gray-600 text-sm mb-1">Password</label>
              <input
                type="password"
                name='password'
                placeholder="••••••••"
                className="w-full text-black px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div className="text-right text-sm text-black hover:underline">
              <a href="#">Forgot password?</a>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-xl hover:bg-blue-600 transition"
            >
              Log In
            </button>
          </form>
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600 mb-2">Or sign in with</p>
            <button
              onClick={signInGoogle}
              className="w-full flex items-center justify-center space-x-2 text-black bg-white py-2 rounded-xl border border-gray-300 hover:shadow-md transition"
            >
              <FcGoogle />
              <span>Sign in with Google</span>
            </button>
          </div>
          <p className="mt-4 text-center text-sm text-gray-600">
            Don't have an account? <Link to='/signup' className="text-blue-500 hover:underline">Sign up</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;