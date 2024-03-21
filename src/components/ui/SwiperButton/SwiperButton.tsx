import React from 'react';
import ArrowRight from './../../../assets/icons/arrow-right.svg';

type SwiperButton = {
  color: 'black' | 'white',
  children: string,
  className?: string,
  link?: {
    href: string,
    target?: '_blank'
  },
  handleClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void,
}

export default function SwiperButton(props: SwiperButton) {
  return (
    <a 
      className={`
        swiper-button 
        ${props.color === 'white' ? 'swiper-button--white' : ''}
        ${props.className ? props.className : ''}
      `} 
      href={props.link?.href ? props.link.href : undefined}
      target={props.link?.target ? props.link.target : undefined}
      onClick={props.handleClick}
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
