import React, { useEffect, useRef } from 'react'
import Location from './../../../assets/icons/location.svg';
import ContactInfo from '../../ui/ContactInfo/ContactInfo';
import SwiperButton from '../../ui/SwiperButton/SwiperButton';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store';

function toPX(value: string) {
  return parseFloat(value) / 100 * (/vh/gi.test(value) ? window.innerHeight : window.innerWidth);
}

import gsap from 'gsap';

export default function MobileMenu() {

  const mobileMenuVisibility = useSelector((state: RootState) => state.uiStates.mobileMenu);

  const mobileMenuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (mobileMenuVisibility) {
      gsap.fromTo(mobileMenuRef.current, {left: toPX('100vw')}, {left: 0, duration: .5});
    } else {
      gsap.to(mobileMenuRef.current, {left: toPX('100vw'), duration: .5});
    }
  }, [mobileMenuVisibility]);

  return (
    <div className='mobile-menu' ref={mobileMenuRef}>
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
