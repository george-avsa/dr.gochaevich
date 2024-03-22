import React, { useEffect } from 'react'
import BackgroundVideo from '../ui/BackgroundVideo/BackgroundVideo'
import Services from '../sections/Services/Services'
import Results from '../sections/Results/Results'
import MedicalWard from '../sections/MedicalWard/MedicalWard'
import Clinics from '../sections/Clinics/Clinics'
import FAQ from '../sections/FAQ/Faq'
import Consultation from '../sections/Consultation/Consultation'
import { useLocation } from 'react-router-dom'

export default function Main() {

    const location = useLocation();

    useEffect(() => {
        const idToScroll = location.hash.split('#')[1];
        if (idToScroll) {
            const elementToScroll = document.querySelector(`#${idToScroll}`) as HTMLElement;
            elementToScroll.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
        }
    }, []);

  return (
    <>
        <BackgroundVideo />
        <Services></Services>
        <Results></Results>
        <MedicalWard></MedicalWard>
        <Clinics></Clinics>
        <FAQ></FAQ>
        <Consultation color='grey'></Consultation>
    </>
  )
}
