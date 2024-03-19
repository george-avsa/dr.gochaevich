import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleMobileMenu } from '../../../store/uiStates';
import { RootState } from '../../../store';

export default function Burger() {

  const mobileMenuVisibility = useSelector((state: RootState) => state.uiStates.mobileMenu);

  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(toggleMobileMenu());
  }

  return (
    <div 
      className={`burger ${mobileMenuVisibility ? 'burger--cross': ''}`} 
      onClick={handleClick}
    >
        <div className='burger__line'></div>
        <div className='burger__line'></div>
        <div className='burger__line'></div>
    </div>
  )
}
