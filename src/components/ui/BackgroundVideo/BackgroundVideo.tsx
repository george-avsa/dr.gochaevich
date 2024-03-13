import React from 'react'
import mp4 from './../../../assets/videos/background-video.mp4';
import SwiperButton from '../SwiperButton/SwiperButton';

export default function BackgroundVideo() {
  return (
    <div className='background-video'>
        <video className='background-video__video' src={mp4} autoPlay muted loop>
            <source src="movie.mp4" type="video/mp4" />
        </video>
        <div className='background-video__content'>
          <h1 className='background-video__title'>
            <span>Хирургически точное</span>
            <br/> воплощение ваших идеалов
          </h1>
          <div className='background-video__buttons'>
            <SwiperButton color='white'>Выбрать пластическую операцию</SwiperButton>
            <SwiperButton color='white'>Записаться на консультацию</SwiperButton>
          </div>
        </div>
    </div>
  )
}
