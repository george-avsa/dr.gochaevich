import React from 'react'
import mp4 from './../../../assets/videos/background-video.mp4';
import SwiperButton from '../SwiperButton/SwiperButton';

export default function BackgroundVideo() {

  const handleClickServices = () => {
    const elementToScroll = document.querySelector('#services') as HTMLElement;
    elementToScroll.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
  };

  return (
    <div className='background-video'>
        <video className='background-video__video' src={mp4} autoPlay muted={true} loop playsInline>
            <source src="movie.mp4" type="video/mp4" />
        </video>
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
