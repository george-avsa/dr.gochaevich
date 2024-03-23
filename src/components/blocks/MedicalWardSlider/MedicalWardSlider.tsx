import { Swiper, SwiperSlide } from 'swiper/react';
import React from 'react';
import WardIcon from './../../../assets/icons/ward.svg';
import WardCardButton from '../../ui/WardCardButton/WardCardButton';
import MedicalCard1 from './../../../assets/images/medical-ward/webp/medical-ward1.webp';
import {Autoplay} from 'swiper/modules';

import 'swiper/css';

export default () => {
  return (
    <div className='medical-ward-slider'>
      
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      loop
      autoplay={{
        delay: 5000
      }}
      breakpoints={{
        450: {
          slidesPerView: 1.2,
          spaceBetween: 16,
          loop: false,
          autoplay: false,
        },
        768: {
          slidesPerView: 'auto',
          spaceBetween: 16,
          loop: false,
          autoplay: false,
        }
      }}
      modules={[Autoplay]}
      className='medical-ward-slider__slider'
    >
      {[1, 2 ,3].map(smth => (
      <SwiperSlide key={smth} className='medical-ward-slider__slide'>
      <div className='ward-slider-card'>
        <div className="ward-slider-card__content">
          <div>
            <div className="ward-slider-card__title-block">
              <div className='ward-slider-card__icon'>
                <WardIcon />
              </div>
              <h4 className='ward-slider-card__title'>
                Премиальные  палаты
              </h4>
            </div>
            <p className='ward-slider-card__description'>
              Повседневная практика показывает, что современная методология разработки требует от нас анализа дальнейших направлений развития. 
            </p>
          </div>
          <div className='ward-slider-card__buttons'>
            <WardCardButton />
            <WardCardButton />
            <WardCardButton />
          </div>
        </div>
        <div className="ward-slider-card__image">
          <img src={MedicalCard1} alt="" />
        </div>
      </div>
      </SwiperSlide>
      ))}
    </Swiper>
    </div>
  );
};