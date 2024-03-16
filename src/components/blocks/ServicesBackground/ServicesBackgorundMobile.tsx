import React, { useEffect } from 'react';
import image from './../../../assets/images/services/png/body.png';
import { useSelector } from 'react-redux';
import gsap from 'gsap';
import { RootState } from '../../../store';

export default function ServicesBackgorundMobile() {

  // const services = useSelector((state: RootState) => state.services);
  const serviceActive = useSelector((state: RootState) => state.services.find((service) => {
    return service.active;
  }));

  useEffect(() => {
    gsap.fromTo('.services-bg-mobile', {opacity: 0}, {opacity: 1, delay: .2, duration: .3});
  }, [serviceActive])

  return (
      <div className='services-bg-mobile'>
        <img src={serviceActive?.image.image} />
      </div>
  )
}