import React from 'react'
import LogoIcon from './../../../assets/icons/logo.svg';
import Navigation from '../Navigation/Navigation';
import Button from '../../ui/Button/Button';
import Burger from '../../ui/Burger/Burger';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store';

export default function Header() {

  const mobileMenuVisibility = useSelector((state: RootState) => state.uiStates.mobileMenu);

  const handleNavigationClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const idToScroll = e.currentTarget.dataset.id;
    const elementToScroll = document.querySelector(`#${idToScroll}`) as HTMLElement;
    elementToScroll.scrollIntoView({ 
      behavior: "smooth", 
      block: idToScroll === 'footer' ? 'end' : "start", 
      inline: "nearest"
    });
  }

  return (
    <header className='header' style={{position: mobileMenuVisibility ? 'fixed' : 'absolute'}}>
      <div className="header__wrapper">
        <div className="header__logo-location">
          <LogoIcon style={{color: '#000000'}} />
          <span className='location-text'>
            Москва
          </span>
        </div>
        <Navigation></Navigation>
        <div className='header__contacts'>
          <Button
            link='https://wa.me/79260387171'
            color="black"
            padding="9px 20px"
            className="header__contacts-button"
            dataId='consultation'
            >Консультация</Button>
          <Button
            color="white"
            padding="9px 20px"
            className="header__contacts-button"
            dataId='footer'
            handleClick={handleNavigationClick}
          >
            Контакты
          </Button>
        </div>
        <Burger></Burger>
      </div>
    </header>
  )
}
