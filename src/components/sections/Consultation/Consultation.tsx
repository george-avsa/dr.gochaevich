import React from 'react';
import BlockTittle from '../../ui/BlockTittle/BlockTittle';
import TittleButton from '../../ui/TittleButton/TittleButton';
import SwiperButton from '../../ui/SwiperButton/SwiperButton';
import Image from './../../../assets/images/consultation/webp/consultation.webp';
import ImageMd from './../../../assets/images/consultation/webp/consultation-md.webp';
import ImageSm from './../../../assets/images/consultation/webp/consultation-xs.webp';

export default function Consultation(props: {color?: string}) {
  return (
    <div className={`consultation ${props.color === 'grey' ? 'consultation--grey' : ''}`}>
      <div className='consultation__content'>

      <TittleButton type='h2'>консультация</TittleButton>
      <BlockTittle className='consultation__tittle'>
        <>Узнайте <span>возможности изменения вашего тела</span></>
      </BlockTittle>
      <p className='consultation__description'>
        Предлагаем консультацию на которой составим план работы, 
        создадим 3д визуализацию будущих изменений и ответим на все ваши вопросы 
      </p>
      <SwiperButton 
        color='black' 
        className='consultation__button'
        link={{
          href: 'https://wa.me/79260387171',
          target: '_blank'
        }}
      >
        Записаться на консультацию
        </SwiperButton>
      </div>
        <div className='consultation__bg'>
          <picture>
            <source media="(min-width: 1280px)" srcSet={Image} type='image/webp' />
            <source media="(min-width: 767px)" srcSet={ImageMd} type='image/webp' />
            <img src={ImageSm} alt="" />
          </picture>
        </div>
    </div>
  )
}
