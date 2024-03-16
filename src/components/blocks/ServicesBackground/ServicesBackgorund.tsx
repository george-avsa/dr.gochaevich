import React, { useEffect, useRef } from 'react';
import { Backgorund } from '../ServicesBackgorunds/ServicesBackgorunds';
import { Service } from '../../../store/services';

type ServiceBackgorund = {
  service: Service;
}

export default function ServicesBackgorund({service}: ServiceBackgorund) {

  const imgRef = useRef<HTMLInputElement>(null);
  const bgRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setTimeout(() => {
        const contentElement = document.querySelector('.services__content') as HTMLElement;
        
        const bgElement = bgRef.current as HTMLElement;
        const imgElement = imgRef.current as HTMLElement;
        
        const leftContent = Number.parseInt(getComputedStyle(contentElement).marginLeft) || 0;

        const leftImg = Number.parseInt(getComputedStyle(imgElement).left) || 0;
        bgElement.style.left = `${(40 + leftContent) - leftImg}px`;
    }, 2);
    }, []);

  return (
    // <div ref={bgRef} className={`services-bg services-bg--${service.image.type} ${!service.active ? 'services-bg--hidden': ''}`}>
    <div ref={bgRef} className={`services-bg services-bg--${service.image.type} ${!service.active ? 'services-bg--hidden': ''}`}>
      {service.image.type !== 'blefaroplasty' && <img src={service.image.image} alt="" className='services-bg-image' />}
      <div className="services-bg__image" ref={imgRef}>
        <img src={service.image.image} className='services-bg__img' alt="" />
      </div>
    </div>
  )
}
