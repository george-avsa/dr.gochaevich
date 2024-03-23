import React from 'react';
import ZhukovkaImage from './../../../assets/images/clinics/webp/zhukovka_clinic.webp';
import iphkImage from './../../../assets/images/clinics/webp/iphk_clinic.webp';
import LocationIcon from './../../../assets/icons/locationDark.svg';
import ZurabImage from '../../../assets/images/clinics/webp/zhukovka_mobile.webp';

type Clinic = {
  name: string | JSX.Element,
  address: string,
  image: string,
};

export default function ClinicsSlider() {

  const clinics: Clinic[] = [
    {name: 'Институт пластической хирургии и косметологии', address: 'г. Москва, Ольховская 27', image: iphkImage,},
    {name: 'Клиника "Жуковка"', address: 'Рублево-Успенское ш., деревня Жуковка, 72', image: ZhukovkaImage,},
  ];


  return (
    <div className='clinics-slider'>
      <img src={ZurabImage} alt="" />
      <div className='clinics-slider__button'>
        клиники  
      </div>
      <div className="clinics-slider__content">
        {clinics.map((clinic: Clinic) => (
          <div className="clinics-slider-item">
              {/* <img src={image} alt="" /> */}
            <div className="clinics-slider-item__image" style={{backgroundImage: `url(${clinic.image})`}}></div>
            <div className='clinics-slider-item__content'>
              <h5 className='clinics-slider-item__name'>
                {clinic.name}
              </h5>
              <div className='clinic-address'>
                <LocationIcon className='clinic-address__icon' />
                <p className='clinic-address__text'>
                  {clinic.address}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
