import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './Footer/Footer'
import Navbar from './Navbar/Navbar'

const Layout = () => {
  return (
    <div style={{display: 'flex', flexDirection: 'column', height: '100vh'}}>
        <Navbar/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default Layout