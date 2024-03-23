import React from 'react'
import mp4 from './../../../assets/videos/background-video.mp4';

export default function Video() {
  return (
    <video className='background-video__video' src={mp4} autoPlay muted={true} loop playsInline>
        <source src="movie.mp4" type="video/mp4" />
    </video>
  )
}
