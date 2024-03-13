import React, { Dispatch } from 'react';
import MoreIcon from '../MoreIcon/MoreIcon';

type ServiceItemProps = {
  active: boolean, 
  title: string,
  description: string,
  handleClick: (e: React.MouseEvent<HTMLDivElement>) => void;
}

export default function ServiceItem(props: ServiceItemProps) {

  return (
    <div className='service-item' data-content={props.title} onClick={props.handleClick}>
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
