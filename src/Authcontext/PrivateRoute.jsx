import React, { use } from 'react'
import { Navigate } from 'react-router'
import { AuthContext_File } from './AuthProvider'
function PrivateRoute({ children }) {

    const { user , loading } = use(AuthContext_File)
     console.log(loading)
    if(loading){
        return <div>Loading...</div>
    }
    // console.log(user)
   
    if (user && user.email) {
        return children
    }
    else {
        return <Navigate to='/login'>
        </Navigate>
    }
}

export default PrivateRoute
