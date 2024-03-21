import React, { Dispatch, useEffect, useRef } from 'react';
import MoreIcon from '../MoreIcon/MoreIcon';
import gsap from 'gsap';
import { useDispatch } from 'react-redux';
import { changeActive } from '../../../store/services';
import { AppDispatch } from '../../../store';

type ServiceItemProps = {
  active: boolean, 
  title: string,
  description: string
}

export default function ServiceItem(props: ServiceItemProps) {

  const dispatch: AppDispatch = useDispatch();

  const serviceRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();
    if (props.active) {
      tl.to(serviceRef.current, {height: "auto", paddingTop: 12 , paddingBottom: 12, duration: .2});
      tl.to(serviceRef.current, {autoAlpha: 1, duration: .2});
    } else {
      tl.to(serviceRef.current, {autoAlpha: 0, height: 0, padding: 0, duration: .2});
    }
  }, [props.active]);

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const divTarget = e.currentTarget.closest('[data-content]') as HTMLElement;
    const titleTarget =  divTarget.dataset.content;
    gsap.to('.services-bg-mobile', {opacity: 0, duration: .2});
    dispatch(changeActive(titleTarget));
  }

  return (
    <div className='service-item' data-content={props.title} onClick={handleClick}>
      <div className="service-item__content">
        <h5 className="service-item__title">
          {props.title}
        </h5>
        <MoreIcon active={props.active}/>
      </div>
      <div className='service-item__description' ref={serviceRef}>{props.description}</div>
    </div>
  )
}
