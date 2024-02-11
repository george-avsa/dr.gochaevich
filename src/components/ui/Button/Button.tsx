import React from 'react'

type ButtonProps = {
    children: String,
    link: string,
    target: LinkTarget,
    padding: string,
}

export default function Button(props: ButtonProps) {

    const padding = props.padding ? props.padding : '5px 10px';
    // const borderRadiusClass = props.rounded ? props.rounded :  

    return (
    <a 
        href={props.link} 
        target={props.target ? props.target : '_self'} 
        style={{
            padding,
        }}
    >{props.children}</a>
    )
}
