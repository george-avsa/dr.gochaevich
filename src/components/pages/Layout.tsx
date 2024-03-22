import React from 'react'
import Header from '../blocks/Header/Header'
import Footer from '../sections/Footer/Footer'
import { Outlet } from 'react-router-dom'
import MobileMenu from '../blocks/MobileMenu/MobileMenu'

export default function Layout() {
  return (
    <>
        <Header />
        <MobileMenu></MobileMenu>
            <Outlet></Outlet>
        <Footer></Footer>
      </>
  )
}
