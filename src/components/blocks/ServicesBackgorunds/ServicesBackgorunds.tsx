import React from 'react';
import ServicesBackgorund from '../ServicesBackground/ServicesBackgorund';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store';


export default function ServicesBackgorunds() {

  const services = useSelector((state: RootState) => state.services);

  return (
    <>
      {services.map(service => (
        <ServicesBackgorund service={service} key={service.image.image}></ServicesBackgorund>
      ))}
    </>
  )
}
