import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider } from 'react-router-dom'
import UserProvider from './layout/UserContext.jsx'
import { router } from './Components/Layouts/RouterLayouts.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserProvider>
    <RouterProvider router={router}></RouterProvider>
    </UserProvider>
    <App />
  </StrictMode>,
)
