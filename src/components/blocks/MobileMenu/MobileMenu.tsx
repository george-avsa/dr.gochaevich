import React from 'react'
import Location from './../../../assets/icons/location.svg';
import ContactInfo from '../../ui/ContactInfo/ContactInfo';
import SwiperButton from '../../ui/SwiperButton/SwiperButton';

export default function MobileMenu() {
  return (
    <div className='mobile-menu'>
      <div className="mobile-location">
          <Location className='mobile-location__icon' />
          <p className='mobile-location__text'>
            Москва
          </p>
      </div>
      <ul className='mobile-navigation'>
        <li className='mobile-navigation__item'>
          <a href='#'>Операции</a>
        </li>
        <li className='mobile-navigation__item'>
          <a href='#'>Визуализация результата</a>
        </li>
        <li className='mobile-navigation__item'>
          <a href='#'>Результаты</a>
        </li>
        <li className='mobile-navigation__item'>
          <a href='#'>Клиника</a>
        </li>
        <li className='mobile-navigation__item'>
          <a href='#'>О хирурге</a>
        </li>
      </ul>
      <ContactInfo name="WhatsApp, Telegram" link={{text: '+7 (926) 038-71-71', href: 'tel:+79260387171'}}></ContactInfo>
      <ContactInfo name="e-mail" link={{text: 'test@mail.ru', href: 'mailto:test@mail.ru'}}></ContactInfo>
      <div className='mobile-menu__button'>
        <SwiperButton color="black">
          Записаться на консультацию
        </SwiperButton>
      </div>
    </div>
  )
}
