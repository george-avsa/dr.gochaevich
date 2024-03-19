import React from 'react';
import TittleButton from '../../ui/TittleButton/TittleButton';
import BlockTittle from '../../ui/BlockTittle/BlockTittle';
import MedicalWardSlider from '../../blocks/MedicalWardSlider/MedicalWardSlider';
import BgImage from './../../../assets/images/medical-ward/png/bg.png';

export default function MedicalWard() {

  return (
    <div className='medical-ward'>
      <div className="medical-ward__bg">
        <img src={BgImage} alt="" />
      </div>
      <div className="medical-ward__content">
        <div className="medical-ward__title">
          <TittleButton type='h2'>окружение</TittleButton>
          <BlockTittle>
            <>Заботимся <span>о вашем восстановлении и комфорте</span></>
          </BlockTittle>
        </div>
      </div>
      <MedicalWardSlider></MedicalWardSlider>
    </div>
  )
}