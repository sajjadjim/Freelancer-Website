import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider } from 'react-router'
import Routers from './Router/Root.jsx'
import AuthProvider from './Authcontext/AuthProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <AuthProvider>
    <RouterProvider  router={Routers} />
  </AuthProvider>
  </StrictMode>,
)
