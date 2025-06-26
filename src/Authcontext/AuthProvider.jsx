import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut, signInWithEmailAndPassword } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react'
import app from '../Firebase/Firebase.init';
// Create here a AuthContext for all file can acess it and use That
export const AuthContext_File = createContext()

// auth import from app 
const auth = getAuth(app)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
 
    const [loading , setLoading] = useState(true);

    // Email and password user create 
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    };

    // user sign out function here do  ------------------------------------
    const logOut = () => {
        return signOut(auth)
    }

    // sign in function work here ----------------------
    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    // sign with in google part -------------------------------------------
    const googleProvider = new GoogleAuthProvider();

    const signInWithGoogle = () => {
        return signInWithPopup(auth, googleProvider);
    };
    //-----------------------------------------------------------------------------------
    // on state change current user information show onm website 
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
              setLoading(false);
        });
        return () => {
            unsubscribe();
        };
    }, []);
    // console.log(loading)
    

    // create here a custome auth Data for useing everywhere 
    const AuthData = {
        user,
        setUser,
        createUser,
        logOut,
        signIn,
        signInWithGoogle,
        loading,
    };

    // User show the current user 
    // console.log(user)

    return <AuthContext_File value={AuthData}>
        {children}
    </AuthContext_File>

}

export default AuthProvider