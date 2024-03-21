import React, { useEffect, useRef, useState } from 'react'
import Location from './../../../assets/icons/location.svg';
import ContactInfo from '../../ui/ContactInfo/ContactInfo';
import SwiperButton from '../../ui/SwiperButton/SwiperButton';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../store';

function toPX(value: string) {
  return parseFloat(value) / 100 * (/vh/gi.test(value) ? window.innerHeight : window.innerWidth);
}

import gsap from 'gsap';
import { navigationItems } from '../Navigation/Navigation';
import { toggleMobileMenu } from '../../../store/uiStates';

export default function MobileMenu() {

  const mobileMenuVisibility = useSelector((state: RootState) => state.uiStates.mobileMenu);

  const mobileMenuRef = useRef<HTMLDivElement | null>(null);

  const [initial, setInitial] = useState<boolean>(false);

  const dispatch = useDispatch();

  const [viewportHeight, setViewportHeight] = useState<number>();

  useEffect(() => {
    setViewportHeight(toPX('100vw'));
    window.addEventListener('resize', () => {
      setViewportHeight(toPX('100vw'));
    });
  }, []);

  useEffect(() => {
    if (initial) {
      if (mobileMenuVisibility) {
        gsap.fromTo(mobileMenuRef.current, {left: viewportHeight}, {left: 0, duration: .5});
      } else {
        gsap.to(mobileMenuRef.current, {left: viewportHeight, duration: .5});
      }
    } else {
      const mobileMenuElement = mobileMenuRef.current as HTMLElement; 
      mobileMenuElement.style.left = '100vw';
      setInitial(true);
    }
  }, [mobileMenuVisibility, viewportHeight]);

  const handleNavigationClick = (e: React.MouseEvent<HTMLLIElement>) => {
    dispatch(toggleMobileMenu());
    const idToScroll = e.currentTarget.dataset.idtoscroll;
    const elementToScroll = document.querySelector(`#${idToScroll}`) as HTMLElement;
    elementToScroll.scrollIntoView({ behavior: "smooth", block: (idToScroll === 'faq') ? "start" : 'end', inline: "nearest" });
  }

  return (
    <div className='mobile-menu' ref={mobileMenuRef}>
      <div className="mobile-location">
          <Location className='mobile-location__icon' />
          <p className='mobile-location__text'>
            Москва
          </p>
      </div>
      <ul className='mobile-navigation'>
        {navigationItems.map(navigationItem => (
        <li 
          className='mobile-navigation__item' 
          key={navigationItem.idToScroll}
          data-idToScroll={navigationItem.idToScroll}
          onClick={handleNavigationClick}
        >
          <a>{navigationItem.name}</a>
        </li>
        ))}
      </ul>
      <ContactInfo name="WhatsApp, Telegram" link={{text: '+7 (926) 038-71-71', href: 'tel:+79260387171'}}></ContactInfo>
      <ContactInfo name="e-mail" link={{text: 'test@mail.ru', href: 'mailto:test@mail.ru'}}></ContactInfo>
      <div className='mobile-menu__button'>
        <SwiperButton 
          color="black" 
          link={{
            href: 'https://wa.me/79260387171',
            target: '_blank'
          }}
        >
          Записаться на консультацию
        </SwiperButton>
      </div>
    </div>
  )
}
