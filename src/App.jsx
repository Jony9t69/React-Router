import React, { Suspense } from 'react'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import RouterLayout from './layout/RouterLayout'
import Home from './Pages/Home.jsx'
import About from './Pages/About.jsx'
import Contact from './Pages/Contact.jsx'
import Blog  from './Pages/Blog.jsx'
import Error from './Pages/Error.jsx'
import MegaMenuData from './Components/MegaMenuData.jsx'
import Login from  './component/Login.jsx'

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RouterLayout/>} errorElement={<Error/>}>
        <Route index 
        element={<Home/>}
        loader={dataLoader}
        />
        <Route path='about' element={<About/>}/>
        <Route path='blog' element={<Blog/>}/>
        <Route path='MegaMenu' element={<MegaMenuData/>}/>
        <Route path='contact' element={<Contact/>}/>
        <Route path='*' element={<Error/>}/>
        <Route path='Login' element={<Login/>}/>
      </Route>
      
    )
  )
  return (
    
   <RouterProvider router={router}></RouterProvider>
    
  )
}

export default App


export async function dataLoader() {
  const response = await fetch('/products.json');
  if (!response.ok) {
    throw new Error('Failed to fetch data.');
  }
  return response.json(); 
}