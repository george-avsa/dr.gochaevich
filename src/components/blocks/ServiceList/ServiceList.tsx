import React, { useState } from 'react'
import ServiceItem from '../../ui/ServiceItem/ServiceItem'

export type Service = {
  active: boolean, 
  title: string,
  description: string,
}

export default function ServiceList() {

  const [services, setServices] = useState<Service[]>([
    {active: true, title: 'Маммопластика', description: 'Каждое тело уникально, и именно поэтому мы подбираем наши решения  индивидуально. Мы подчеркиваем вашу уникальность, создавая гармоничные формы, которые лучше всего подходят именно вам.'},
    {active: false, title: 'Блефаропластика', description: 'Каждое тело уникально, и именно поэтому мы подбираем наши решения  индивидуально. Мы подчеркиваем вашу уникальность, создавая гармоничные формы, которые лучше всего подходят именно вам.'},
    {active: false, title: 'Липосакция', description: 'Каждое тело уникально, и именно поэтому мы подбираем наши решения  индивидуально. Мы подчеркиваем вашу уникальность, создавая гармоничные формы, которые лучше всего подходят именно вам.'},
    {active: false, title: 'Абдоминопластика', description: 'Каждое тело уникально, и именно поэтому мы подбираем наши решения  индивидуально. Мы подчеркиваем вашу уникальность, создавая гармоничные формы, которые лучше всего подходят именно вам.'},
  ]);

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const divTarget = e.currentTarget.closest('[data-content]') as HTMLElement;
    const titleTarget =  divTarget.dataset.content;
    setServices((services) => services.map((service: Service) => {
      if (service.title === titleTarget) {
        return {...service, active: true};
      }
      return {...service, active: false};
    })) 
  }
  
  return (
    <div className='service-list'>
      {services.map(service => (
          <ServiceItem 
          key={service.title}
          active={service.active}
          title={service.title}
          description={service.description}
          handleClick={handleClick}
          />
      ))}
    </ div>
  )
}
