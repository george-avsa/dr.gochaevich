import React from 'react'
import mp4 from './../../../assets/videos/background-video.mp4';

export default function BackgroundVideo() {
  return (
    <div className='background-video'>
        <video className='background-video__video' src={mp4} autoPlay muted loop>
            <source src="movie.mp4" type="video/mp4" />
        </video>
    </div>
  )
}
