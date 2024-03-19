import React from 'react'
import Header from './components/blocks/Header/Header'
import BackgroundVideo from './components/ui/BackgroundVideo/BackgroundVideo'
import MobileMenu from './components/blocks/MobileMenu/MobileMenu'
import Services from './components/sections/Services/Services'
import Results from './components/sections/Results/Results'
import MedicalWard from './components/sections/MedicalWard/MedicalWard'
import Clinics from './components/sections/Clinics/Clinics'
import Consultation from './components/sections/Consultation/Consultation'
import 'swiper/css';
import FAQ from './components/sections/FAQ/Faq'
import Footer from './components/sections/Footer/Footer'


export default function App() {
  return (
    <>
      <Header />
      <MobileMenu/>
      <BackgroundVideo />
      <Services></Services>
      <Results></Results>
      <MedicalWard></MedicalWard>
      <Clinics></Clinics>
      <Consultation></Consultation>
      <FAQ></FAQ>
      <Footer></Footer>
    </>
  )
}
