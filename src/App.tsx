import React from 'react'
import Header from './components/blocks/Header/Header'
import BackgroundVideo from './components/ui/BackgroundVideo/BackgroundVideo'
import MobileMenu from './components/blocks/MobileMenu/MobileMenu'


export default function App() {
  return (
    <>
      <Header />
      <MobileMenu/>
      <BackgroundVideo />
    </>
  )
}
