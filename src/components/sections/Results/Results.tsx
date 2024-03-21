import React from 'react';
import TittleButton from '../../ui/TittleButton/TittleButton';
import BlockTittle from '../../ui/BlockTittle/BlockTittle';
import ResultBg from './../../../assets/images/services/png/servicesBg.png';

import resultsEye from './../../../assets/images/services/png/eye.png';
import resultStar from './../../../assets/images/services/png/star.png';
import resultFlower from './../../../assets/images/services/png/flower.png';
import resultIphonesMobile from './../../../assets/images/services/png/iphones-mobile.png';
import resultIphones from './../../../assets/images/services/png/iphones.png';

import resultVizualisation from './../../../assets/images/services/png/vizualisation.png';
import SwiperButton from '../../ui/SwiperButton/SwiperButton';

type Advantage = {
  title: string,
  description: JSX.Element,
  image: string,
};

const resultAdvantages: Advantage[] = [
  {title: 'Предугадываем ваши взгляды', image: resultsEye, 
    description: (<>Обладаем уникальной способностью читать ваши ожидания и превращать их в реальность. Мы стремимся не просто удовлетворить ваши желания, а превзойти их.</>)},
  {title: 'Сочетаем с индивидуальностью', image: resultStar, 
    description: (<>Каждое тело уникально, и именно поэтому мы подбираем наши решения  индивидуально. <br/><br/> Мы подчеркиваем вашу уникальность, создавая гармоничные формы, которые лучше всего подходят именно вам.</>)},
  {title: 'Претворяем ваш идеал эстетики', image: resultFlower, 
    description: (<>Наша цель - достичь максимальной эстетики, сохраняя при этом естественность. <br/><br/>Мы формируем красоту, которая не только соответствует вашим ожиданиям, но и подчеркивает вашу естественную привлекательность.</>)},
];

export default function Results() {

  return (
    <div className='results'>
      <div className='results__bg'>
        <img src={ResultBg} alt="" />
      </div>
      <div className="results__content">
        <div>
          <div className="results__title">
            <TittleButton type='h2'>цели</TittleButton>
            <BlockTittle>
              <>Формируем новые ощущения <br/><span>вашего тела</span></>
            </BlockTittle>
          </div>
          <div className='result-cards'>
            {resultAdvantages.map(advantage => (
              <div className="result-cards__item">
                <div className='result-cards__bg'>
                  <img src={advantage.image} alt="" />
                </div>
                <h5 className='result-cards__title'>{advantage.title}</h5>
                <p className='result-cards__description'>{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>
        <div className='vizualisation' id='vizualisation'>
          <div className='vizualisation__bg'>
            <img src={resultVizualisation} alt="" />
            <div className='vizualisation__image'>
              <img src={resultVizualisation} alt="" />
            </div>
          </div>
          <div className='vizualisation__content'>
            <TittleButton type='h3'>видение</TittleButton>
            <h3 className='vizualisation__title'>
              <>Визуализация<br/>результата</>
            </h3>
            <p className='vizualisation__description'>
              Наши консультации - это путь к ясному видению будущих изменений. С помощью передовых 3D визуализаций, мы даем вам возможность заглянуть в будущее и увидеть свой идеальный облик еще до операции.
            </p>
            <SwiperButton 
              className="vizualisation__button" 
              color='black'
              link={{
                href: 'https://wa.me/79260387171',
                target: '_blank'
              }}
            >Записаться на консультацию</SwiperButton>
          </div>
        </div>
        <div className="results-block" id='results'>
          <div>
            <TittleButton type='h3'>опыт</TittleButton>
            <h3 className='results-block__title'>
              <>Результаты<br/>операций</>
            </h3>
            <p className='results-block__description'>
              Наша практика насчитывает более 100 успешных операций. Доказываем нашу способность сотворять желанные образы в социальных сетях.
            </p>
            <SwiperButton 
              color='black' 
              className='results-block__button'
              link={{
                href: 'https://www.instagram.com/dr.gochaevich/',
                target: '_blank'
              }}
            >Смотреть больше работ в Instagram*</SwiperButton>
          </div>
          <p className="results-block__footnote">
            *принадлежит компании Meta, является террористической организацией
          </p>
          <div className="results-block__bg">
            <picture>
              <source media="(min-width: 500px)" srcSet={resultIphones} type='image/png' />
              <img src={resultIphonesMobile} alt="" />
            </picture>
          </div>
        </div>
      </div>
    </div>
  )
}
