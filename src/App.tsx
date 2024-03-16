import React from 'react'
import Header from './components/blocks/Header/Header'
import BackgroundVideo from './components/ui/BackgroundVideo/BackgroundVideo'
import MobileMenu from './components/blocks/MobileMenu/MobileMenu'
import Services from './components/sections/Services/Services'
import Results from './components/sections/Results/Results'


export default function App() {
  return (
    <>
      <Header />
      <MobileMenu/>
      <BackgroundVideo />
      <Services></Services>
      <Results></Results>
    </>
  )
}
