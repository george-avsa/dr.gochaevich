import React from 'react'
import SwiperButton from '../SwiperButton/SwiperButton';

import { LazyLoadComponent } from 'react-lazy-load-image-component';
import Video from '../Video/Video';

export default function BackgroundVideo() {

  const handleClickServices = () => {
    const elementToScroll = document.querySelector('#services') as HTMLElement;
    elementToScroll.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
  };

  return (
    <div className='background-video'>
        <LazyLoadComponent>
          <Video></Video>
        </LazyLoadComponent>
        <div className='background-video__content'>
          <h1 className='background-video__title'>
            <span>Хирургически точное</span>
            <br/> воплощение ваших идеалов
          </h1>
          <div className='background-video__buttons'>
            <SwiperButton 
              color='white' 
              handleClick={handleClickServices}
            >Выбрать пластическую операцию</SwiperButton>
            <SwiperButton 
              color='white'
              link={{
                href: 'https://wa.me/79260387171',
                target: '_blank'
              }}
            >Записаться на консультацию</SwiperButton>
          </div>
        </div>
    </div>
  )
}
