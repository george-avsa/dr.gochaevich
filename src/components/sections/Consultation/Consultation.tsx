import React from 'react';
import BlockTittle from '../../ui/BlockTittle/BlockTittle';
import TittleButton from '../../ui/TittleButton/TittleButton';
import SwiperButton from '../../ui/SwiperButton/SwiperButton';
import Image from './../../../assets/images/consultation/png/consultation.png';
import ImageMd from './../../../assets/images/consultation/png/consultation-md.png';
import ImageSm from './../../../assets/images/consultation/png/consultation-xs.png';

export default function Consultation() {
  return (
    <div className='consultation'>
      <div className='consultation__content'>

      <TittleButton type='h2'>консультация</TittleButton>
      <BlockTittle className='consultation__tittle'>
        <>Узнайте <span>возможности изменения вашего тела</span></>
      </BlockTittle>
      <p className='consultation__description'>
        Предлагаем консультацию на которой составим план работы, 
        создадим 3д визуализацию будущих изменений и ответим на все ваши вопросы 
      </p>
      <SwiperButton color='black' className='consultation__button'>
        Записаться на консультацию
        </SwiperButton>
      </div>
        <div className='consultation__bg'>
          <picture>
            <source media="(min-width: 1280px)" srcSet={Image} type='image/png' />
            <source media="(min-width: 767px)" srcSet={ImageMd} type='image/png' />
            {/* <img src={resultIphones} srcSet="width:auto;" /> */}
            <img src={ImageSm} alt="" />
          </picture>
        </div>
    </div>
  )
}