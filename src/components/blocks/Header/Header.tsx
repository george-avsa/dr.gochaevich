import React from 'react'
import Logo from './../../../assets/icons/logo.svg';
import Navigation from '../Navigation/Navigation';

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
          
        </div>
      </div>
    </header>
  )
}
