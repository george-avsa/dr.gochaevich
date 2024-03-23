import React, { useEffect } from 'react'
import PriceList from '../sections/PriceList/PriceList'
import Consultation from '../sections/Consultation/Consultation'

export default function Prices() {

    useEffect(() => {
        let posTop = window.pageYOffset;
        if (posTop) {
            const headerElement = document.querySelector('header') as HTMLElement;
            headerElement.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
        }
    }, []);

  return (
    <>
        <PriceList></PriceList>
        <Consultation color='grey'></Consultation>
    </>
  )
}
