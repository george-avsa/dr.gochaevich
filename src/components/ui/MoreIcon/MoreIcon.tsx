import React from 'react'

type MoreIconProps = {
  active?: boolean;
}

export default function MoreIcon(props: MoreIconProps) {
  return (
    <div className='more-icon'>
      <div className={`more-icon__stripe ${!props.active ? 'more-icon__stripe--active' : ''}`}></div>
      <div className="more-icon__stripe"></div>
    </div>
  )
}
