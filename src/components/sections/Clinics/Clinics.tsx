import React from 'react'
import LogoIcon from './../../../assets/icons/logo.svg';
import BlockTittle from '../../ui/BlockTittle/BlockTittle';
import ZurabImage from '../../../assets/images/clinics/png/zurab.png';
import ClinicsSlider from '../../blocks/ClinicsSlider/ClinicsSlider';

export default function Clinics() {
  return (
    <div className='clinics' id='clinics'>
      <div className="clinics__bg">
        <img src={ZurabImage} alt="" />
      </div>
      <div className="clinics__content">
        <LogoIcon style={{color: '#3E4041'}} />
        <BlockTittle className='clinics__tittle'>
            <>Ведущий хирург</>
        </BlockTittle>
        <h2 className='clinics__name'>
          Авсаджанишвили Зураб Гочаевич
        </h2>
        <p className='clinics__description'>
          «Я стремлюсь к тому, чтобы ввести душу и тело в гармонию через создание идеальных 
          ощущений от своего тела, что, в свою очередь, помогает обрести внутреннее согласие. 
          Моя миссия заключается в том, чтобы совершенствование физической гармонии стало ключом 
          к  внутреннему равновесию»
        </p>
        <ClinicsSlider></ClinicsSlider>
      </div>
    </div>
  )
}
