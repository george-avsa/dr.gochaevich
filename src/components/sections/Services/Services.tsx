import React from 'react';
import Logo from './../../../assets/icons/logo.svg';
import ServicesBackgorunds from '../../blocks/ServicesBackgorunds/ServicesBackgorunds';
import ServiceList from '../../blocks/ServiceList/ServiceList';
import ServicesBackgorundMobile from '../../blocks/ServicesBackground/ServicesBackgorundMobile';
import { Link } from 'react-router-dom';

export default function Services() {
  return (
    <div className='services' id='services'>
      <ServicesBackgorunds></ServicesBackgorunds>
      <div className="services__wrapper">
        <div className="services__content">
          <Logo />
          <h3 className='services__title'>
            Пластические <br /> операции в Москве
          </h3>
          <ServicesBackgorundMobile></ServicesBackgorundMobile>
          <ServiceList></ServiceList>
          <Link to='/prices'>
            <div className="services__button">
              Все услуги
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}
