import React, { useEffect } from 'react';
import chestImage from './../../../assets/images/services/png/chest.png';
import bodyImage from './../../../assets/images/services/png/body.png';
import stomachImage from './../../../assets/images/services/png/stomach.png';
import blefaroplastyImage from './../../../assets/images/services/png/blefaroplasty.png';
import ServicesBackgorund from '../ServicesBackground/ServicesBackgorund';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store';

export type Backgorund = {
  type: string,
  image: string,
  active?: boolean
} 

const backgorunds: Backgorund[] = [
  {
    type: "blefaroplasty", 
    image: blefaroplastyImage,
    // active: true,
  },
  {
    type: "stomach", 
    image: stomachImage,
    // active: true,
  },
  {
    type: "body", 
    image: bodyImage,
    // active: true,
  },
  {
    type: "chest", 
    image: chestImage,
    active: true,
  },
];

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
