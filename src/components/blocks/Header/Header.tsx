import React from 'react'
import Logo from './../../../assets/icons/logo.svg';
import Navigation from '../Navigation/Navigation';
import Button from '../../ui/Button/Button';
import Burger from '../../ui/Burger/Burger';

export default function Header() {
  return (
    <header className='header'>
      <div className="header__wrapper">
        <div className="header__logo-location">
          <Logo />
          <span className='location-text'>
            Москва
          </span>
        </div>
        <Navigation></Navigation>
        <div className='header__contacts'>
          <Button
            link='#'
            color="black"
            padding="9px 20px"
            className="header__contacts-button"
          >Консультация</Button>
          <Button
            link='#'
            color="white"
            padding="9px 20px"
            className="header__contacts-button"
          >Контакты</Button>
        </div>
        <Burger></Burger>
      </div>
    </header>
  )
}
