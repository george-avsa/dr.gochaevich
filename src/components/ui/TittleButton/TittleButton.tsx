import React, { Children } from 'react'

export default function TittleButton(props: {children: string, type: 'h2' | 'h3'}) {
  return (
    <span className={`tittle-button ${props.type === 'h2' ? 'tittle-button--h2' : 'tittle-button--h3'}`}>
      {props.children}
    </span>
  )
}
