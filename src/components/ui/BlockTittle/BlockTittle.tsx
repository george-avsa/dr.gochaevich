import React from 'react'

type BlockTittle = {
  children: JSX.Element;
  className?: string;
}

export default function BlockTittle(props: BlockTittle) {
  return (
    <h2 className={`block-tittle ${props.className}`}>
      {props.children}
    </h2>
  )
}
