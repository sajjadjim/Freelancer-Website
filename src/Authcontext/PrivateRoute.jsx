import React, { use } from 'react'
import { Navigate } from 'react-router'
import { AuthContext_File } from './AuthProvider'
import { useLocation } from 'react-router'
function PrivateRoute({ children }) {
    // user Location Current And Rediect the Location 
    const location = useLocation()
    // console.log(location.pathname)

    const { user , loading } = use(AuthContext_File)
    //  console.log(loading)
    if(loading){
        // Show a loading spinner for 0.5 seconds on page load
        const [showSpinner, setShowSpinner] = React.useState(true);

        React.useEffect(() => {
            const timer = setTimeout(() => setShowSpinner(false), 1000);
            return () => clearTimeout(timer);
        }, []);

        if (showSpinner) {
            return (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                <div className="spinner" style={{
                width: '40px',
                height: '40px',
                border: '4px solid #ccc',
                borderTop: '4px solid #333',
                borderRadius: '50%',
                animation: 'spin 1s linear infinite'
                }} />
                <style>
                {`
                @keyframes spin {
                    0% { transform: rotate(0deg); }
                    100% { transform: rotate(360deg); }
                }
                `}
                </style>
            </div>
            );
        }
        return <div>Loading...</div>
    }
    // console.log(user)


    if (user && user.email) {
        return children
    }
    else {
        return <Navigate state={location.pathname} to='/login'>
        </Navigate>
    }
}

export default PrivateRoute
