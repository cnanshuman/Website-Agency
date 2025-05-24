import React from 'react'
import { Outlet } from 'react-router-dom'
import Nav from '../Component/Home/Nav'
import Footer from '../Component/Home/Footer'
function Mainlayput() {
  return (
    <div>
        <Nav/>
      <Outlet />
      <Footer />

      
    </div>
  )
}

export default Mainlayput
