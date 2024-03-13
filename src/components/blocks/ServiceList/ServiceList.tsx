import React, { useEffect, useState } from 'react'
import ServiceItem from '../../ui/ServiceItem/ServiceItem'
import { useSelector } from 'react-redux'
import { RootState } from '../../../store'

export type Service = {
  active: boolean, 
  title: string,
  description: string,
}

export default function ServiceList() {

  const services = useSelector((state: RootState) => state.services);
  
  return (
    <div className='service-list'>
      {services.map((service: Service) => (
          <ServiceItem 
          key={service.title}
          active={service.active}
          title={service.title}
          description={service.description}
          />
      ))}
    </ div>
  )
}
