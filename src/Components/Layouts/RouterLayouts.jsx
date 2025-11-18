import Nav from '../Nav'
import { Outlet } from 'react-router-dom'
import Footer from '../AboutComponent/Footer'
import { Children } from 'react'

const RouterLayouts = () => {
  return (
    
    <div className='p-2 md:p-0'>
      <Nav />
      <Outlet />
      <Footer />
    </div>
  )
}

export default RouterLayouts
