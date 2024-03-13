import React, { useEffect, useRef } from 'react';
import { Backgorund } from '../ServicesBackgorunds/ServicesBackgorunds';

type ServiceBackgorund = {
  backgorund: Backgorund;
}

export default function ServicesBackgorund({backgorund}: ServiceBackgorund) {

  const imgRef = useRef<HTMLInputElement>(null);
  const bgRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setTimeout(() => {
      // if (backgorund.type !== 'blefaroplasty') {
        const contentElement = document.querySelector('.services__content') as HTMLElement;
        
        const bgElement = bgRef.current as HTMLElement;
        const imgElement = imgRef.current as HTMLElement;
        
        const leftContent = Number.parseInt(getComputedStyle(contentElement).marginLeft) || 0;

        const leftImg = Number.parseInt(getComputedStyle(imgElement).left) || 0;
        bgElement.style.left = `${(40 + leftContent) - leftImg}px`;
      // }
    }, 2);
    }, []);

  return (
    <div ref={bgRef} className={`services-bg services-bg--${backgorund.type} ${!backgorund.active ? 'services-bg--hidden': ''}`}>
      {backgorund.type !== 'blefaroplasty' && <img src={backgorund.image} alt="" className='services-bg-image' />}
      <div className="services-bg__image" ref={imgRef}>
        <img src={backgorund.image} className='services-bg__img' alt="" />
      </div>
    </div>
  )
}
