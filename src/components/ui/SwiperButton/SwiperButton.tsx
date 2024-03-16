import React from 'react';
import ArrowRight from './../../../assets/icons/arrow-right.svg';

type SwiperButton = {
  color: 'black' | 'white',
  children: string,
  className?: string,
}

export default function SwiperButton(props: SwiperButton) {
  return (
    <a 
      className={`
        swiper-button 
        ${props.color === 'white' ? 'swiper-button--white' : ''}
        ${props.className ? props.className : ''}
      `} 
      href='#'
    >
      <div className='swiper-button__content'>
          <span>{props.children}</span>
          <div className="swiper-button__arrow">
            <ArrowRight className='swiper-button__svg' />
          </div>
      </div>
    </a>
  )
}
