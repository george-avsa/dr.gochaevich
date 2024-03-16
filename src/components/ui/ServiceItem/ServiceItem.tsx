import React, { Dispatch } from 'react';
import MoreIcon from '../MoreIcon/MoreIcon';
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

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const divTarget = e.currentTarget.closest('[data-content]') as HTMLElement;
    const titleTarget =  divTarget.dataset.content;
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
      {props.active && <p className='service-item__description'>{props.description}</p>}
    </div>
  )
}
