import React from 'react'

type ContactInfoProps = {
  name: string,
  link: {
    text: string,
    href: string
  }
}

export default function ContactInfo(props: ContactInfoProps) {
  return (
    <div className='contact-info'>
      <p className='contact-info__name'>{props.name}</p>
      <a className='contact-info__link' href={props.link.href}>{props.link.text}</a>
    </div>
  )
}
