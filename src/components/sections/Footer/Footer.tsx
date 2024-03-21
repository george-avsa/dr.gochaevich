import React from 'react'
import LogoIcon from './../../../assets/icons/logo.svg';
import ContactInfo from '../../ui/ContactInfo/ContactInfo';
import Button from '../../ui/Button/Button';
import { navigationItems } from '../../blocks/Navigation/Navigation';

export default function Footer() {

  const handleNavigationClick = (e: React.MouseEvent<HTMLLIElement>) => {
    const idToScroll = e.currentTarget.dataset.idtoscroll;
    const elementToScroll = document.querySelector(`#${idToScroll}`) as HTMLElement;
    elementToScroll.scrollIntoView({ behavior: "smooth", block: (idToScroll === 'faq') ? "start" : 'end', inline: "nearest" });
  }

  return (
    <footer className='footer' id='footer'>
      <div className='footer__content'>
        <div className='footer__logo-navigation'>
          <div className='footer__logo-location'>
            <LogoIcon style={{color: 'white'}} />
            <p className='footer__location'>Москва</p>
          </div>
          <div className='footer-navigation'>
            {navigationItems.map(navigationItem => (
            <span 
              onClick={handleNavigationClick}
              className='footer-navigation__item'
              data-idToScroll={navigationItem.idToScroll}
              key={navigationItem.idToScroll}
            >{navigationItem.name}</span>
            ))}
          </div>
        </div>
        <div className='footer__contacts'>
        <ContactInfo 
          name='WhatsApp, Telegram' 
          className='footer__contact-info'
          link={{text: '+7 (926) 038-71-71', href: 'tel:+79260387171'}}
          ></ContactInfo>
        <ContactInfo 
          name='e-mail' 
          className='footer__contact-info'
          link={{text: 'test@mail.ru', href: '#'}}
          ></ContactInfo>

          <Button
            link='https://wa.me/79260387171'
            target='_blank'
            color="white"
            padding="9px 20px"
            className="footer__consultation-button"
           >Консультация</Button>
        </div>
      </div>
    </footer>
  )
}
