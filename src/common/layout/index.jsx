import React from 'react'
import { Container } from 'react-bootstrap'
import { Outlet } from 'react-router-dom'
import HeaderComp from '../header'
import Footer from '../../components/elements/Footer'

function Layout() {
  return (
    <>
    <HeaderComp/>
    <main id="content" className="site-main post-1807 page type-page status-publish hentry">
      <div className="page-content">
      <Outlet/>
      </div>    
    </main>
    <Footer/>     
    </>
  )
}

export default Layout