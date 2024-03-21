import React from 'react'

type ButtonProps = {
    children: String,
    link?: string,
    color: String,
    target?: LinkTarget,
    padding?: string,
    rounded?: boolean,
    className?: String,
    dataId?: string,
    handleClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void,
}

export default function Button(props: ButtonProps) {

    const padding = props.padding ? props.padding : '5px 10px';
    const borderRadius = props.rounded ? '10px' : '7px';

    return (
    <a 
        href={props.link ? props.link : undefined}
        target={props.target ? props.target : '_self'} 
        style={{
            padding,
            borderRadius,
        }}
        onClick={props.handleClick}
        className={`button button--${props.color} ${props.className}`}
        data-id={props.dataId}
    >{props.children}</a>
    )
}
