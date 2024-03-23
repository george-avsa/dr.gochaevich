import React from 'react';
import RubleIcon from './../../../assets/icons/ruble.svg'

type PriceService = {name: string, price: string};
type PriceType = {type: string, id: string, services: PriceService[]}; 

const servicesObject: PriceType[] = [
  {type: 'Маммопластика', id: "mammoplasty", services: [
    {name: 'Увеличение груди', price: '280.000',},
    {name: 'Увеличение груди с периареольной подтяжкой', price: '320.000',},
    {name: 'Увеличение груди с Т-образной подтяжкой', price: '380.000',},
    {name: 'Т-образная подтяжка без имплантов', price: '300.000',},
    {name: 'Т-образная подтяжка с редукцией', price: '380.000',},
    {name: 'Удаление/замена имплантов', price: '420.000',},
  ]},
  {type: 'Блефаропластика', id: "blefaroplasty", services: [
    {name: 'Круговая блефаропластика', price: '150.000',},
  ]},
  {type: 'Липосакция', id: "liposakcia", services: [
    {name: 'Липосакция (зона)', price: 'от 10.000',},
  ]},
  {type: 'Абдоминопластика', id: "abdominoplasty", services: [
    {name: 'Абдоминопластика', price: '340.000',},
    {name: 'Миниабдоминопластика', price: '180.000',},
  ]},
];

  const handleNavigationClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const idToScroll = e.currentTarget.dataset.idtoscroll;
    console.log(idToScroll);
    const elementToScroll = document.querySelector(`#${idToScroll}`);
    if (elementToScroll) {
      elementToScroll.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
    }
  }

export default function PriceList() {
  return (
    <div className='price-list'>
      <div className="price-list__content">

        <div className="price-list-menu">
          {servicesObject.map(type => (
            <div className="price-list-menu__item" 
            onClick={handleNavigationClick} data-idToScroll={type.id} key={type.type}>
              {type.type}
            </div>
          ))}
        </div>
        <div className='price-list__list'>
          <div className='price-list__disclaimer'>
          *Стоимость работы не фиксированна и зависит от объема работ
          </div>
          {servicesObject.map(type => (
            <React.Fragment key={type.type}>
              <h3 className='price-list__type-title'
                    id={type.id} >
                {type.type}
              </h3>
              <div className='price-list__type-list'>
                {type.services.map(service => (
                  <div 
                    className='price-list-item' 
                    key={service.name}
                  >
                    <p className="price-list-item__name">{service.name}</p>
                    <div className='price-list-item__separator'></div>
                    <div className="price-list-item__price">
                      <span>{service.price}</span>
                      
                      <RubleIcon className='price-list-item__ruble-icon'/>
                    </div>
                  </div>
                ))}
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  )
}
