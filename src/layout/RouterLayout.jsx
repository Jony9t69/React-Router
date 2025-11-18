
import Navig from '../component/Nav'
import { Outlet } from 'react-router-dom'
import Footer from '../component/Footer'
import { Suspense } from 'react'
import { Toaster } from 'react-hot-toast'
const RouterLayout = () => {
  return (
    <div className='p-2 md:p-0'>
      <Suspense fallback = {<div>loading</div>}>
      <Navig></Navig>
      <Toaster></Toaster>
      <Outlet></Outlet>
      <Footer></Footer>
      </Suspense>
    </div>
  )
}

export default RouterLayout
