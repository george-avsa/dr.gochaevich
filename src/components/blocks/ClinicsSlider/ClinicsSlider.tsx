import React from 'react';
import image from './../../../assets/images/clinics/png/zhukovka_clinic.png';
import LocationIcon from './../../../assets/icons/locationDark.svg';
import ZurabImage from '../../../assets/images/clinics/png/zhukovka_mobile.png';

export default function ClinicsSlider() {
  return (
    <div className='clinics-slider'>
      <img src={ZurabImage} alt="" />
      <div className='clinics-slider__button'>
        клиники  
      </div>
      <div className="clinics-slider__content">
        <div className="clinics-slider-item">
          <div className="clinics-slider-item__image">
            <img src={image} alt="" />
          </div>
          <div className='clinics-slider-item__content'>
            <h5 className='clinics-slider-item__name'>
              Клиника "Жуковка"
            </h5>
            <div className='clinic-address'>
              <LocationIcon className='clinic-address__icon' />
              <p className='clinic-address__text'>
                Рублево-Успенское ш., деревня Жуковка, 72
              </p>
            </div>
          </div>
        </div>
        <div className="clinics-slider-item">
          <div className="clinics-slider-item__image">
            <img src={image} alt="" />
          </div>
          <div className='clinics-slider-item__content'>
            <h5 className='clinics-slider-item__name'>
              Клиника "Жуковка"
            </h5>
            <div className='clinic-address'>
              <LocationIcon className='clinic-address__icon' />
              <p className='clinic-address__text'>
                Рублево-Успенское ш., деревня Жуковка, 72
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
