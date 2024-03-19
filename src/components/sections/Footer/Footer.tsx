import React from 'react'
import LogoIcon from './../../../assets/icons/logo.svg';
import ContactInfo from '../../ui/ContactInfo/ContactInfo';
import Button from '../../ui/Button/Button';

export default function Footer() {
  return (
    <footer className='footer'>
      <div className='footer__content'>
        <div className='footer__logo-navigation'>
          <div className='footer__logo-location'>
            <LogoIcon style={{color: 'white'}} />
            <p className='footer__location'>Москва</p>
          </div>
          <div className='footer-navigation'>
            <span className='footer-navigation__item'>Операции</span>
            <span className='footer-navigation__item'>Визуализация результата</span>
            <span className='footer-navigation__item'>Результаты</span>
            <span className='footer-navigation__item'>Клиника</span>
            <span className='footer-navigation__item'>О хирурге</span>
          </div>
        </div>
        <div className='footer__contacts'>
        <ContactInfo 
          name='WhatsApp, Telegram' 
          className='footer__contact-info'
          link={{text: '+7 (926) 038-71-71', href: '#'}}
          ></ContactInfo>
        <ContactInfo 
          name='e-mail' 
          className='footer__contact-info'
          link={{text: 'test@mail.ru', href: '#'}}
          ></ContactInfo>

          <Button
            link='#'
            color="white"
            padding="9px 20px"
            className="footer__consultation-button"
           >Консультация</Button>
        </div>
      </div>
    </footer>
  )
}
