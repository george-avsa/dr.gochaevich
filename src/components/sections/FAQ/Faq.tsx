import React, { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperProps, SwiperRef, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import Arrow from './../../../assets/icons/arrow.svg';

import 'swiper/css';
import 'swiper/css/navigation';
import { Swiper as SwiperElement } from 'swiper/types';
import PlayIcon from './../../../assets/icons/play.svg';
import BlockTittle from '../../ui/BlockTittle/BlockTittle';
import TittleButton from '../../ui/TittleButton/TittleButton';


export default function FAQ() {

  const videos = [
    'video_2024-03-17_18-51-45.mp4',
    "video_2024-03-19_09-38-01.mp4",
    "video_2024-03-19_09-38-14.mp4",
    "video_2024-03-19_09-38-18.mp4",
    "video_2024-03-19_09-38-20.mp4",
    "video_2024-03-19_09-38-26.mp4",
    "video_2024-03-19_09-38-29.mp4",
    "video_2024-03-19_09-38-32.mp4",
    "video_2024-03-19_09-38-35.mp4"
  ];

  const activeVideoRef = useRef<HTMLMediaElement | null>(null);

  const [play, setPlay] = useState<boolean>(false);

  const handleVideoClick = (e: React.MouseEvent<HTMLDivElement>) => {
    setPlay((play) => !play);
  }

  useEffect(() => {
    if (activeVideoRef.current) {
      if (play) {
        activeVideoRef.current.play();
      } else {
        activeVideoRef.current.pause();
      }
    }
  }, [play]);

  const swiperRef = useRef<SwiperElement | null>(null);
  const swiperElementRef = useRef<HTMLElement | null>(null);

  return (
      <div className='faq' id='faq'>
        <div className='faq__title-block'>
          <TittleButton type='h2'>FaQ</TittleButton>
          <BlockTittle className='faq__tittle'>
            <>Ответы</>
          </BlockTittle>
        </div>
        <h2 className='faq__title-add'>
          на  частозадаваемые вопросы
        </h2>
      <Swiper
        className='faq__slider'
        modules={[Navigation]}
        onBeforeInit={(swiper) => {
          swiperElementRef.current = swiper.el;
          swiperRef.current = swiper;
        }}
        slidesPerView='auto'
        loop={true}
        loopPreventsSliding={true}
        centeredSlides={true}
        pagination={{ clickable: true }}
        allowTouchMove={false}
        onSlideChange={(swiper) => {
          setTimeout(() => {

            const keklols = swiper.el?.querySelectorAll('.swiper-slide');
            keklols?.forEach(keklol => {
              const video = keklol.querySelector('video') as HTMLMediaElement;
              if (keklol.classList.contains('swiper-slide-active')) {
                activeVideoRef.current = video;
              } else {
                video?.pause();
                setPlay(() => false);
                video!.currentTime = 0;
                video.removeAttribute('controls');
              }
            });
          }, 100);
        }}
      >
        <div className='faq__navigation faq__navigation--left' onClick={() => swiperRef.current?.slidePrev()}>
          <Arrow/>
        </div>
        <div className='faq__navigation faq__navigation--right' onClick={() => swiperRef.current?.slideNext()}>
          <Arrow/>
        </div>
        {videos.map(video => (
          <SwiperSlide className='faq__slide' key={video}>
          <div className='faq__video'>
            <div className='faq__video-dummy' onClick={handleVideoClick}>
              <div className={`faq__play-pause ${play ? 'faq__play-pause--hidden' : ''}`}>
                <PlayIcon />
              </div>
            </div>
            <video src={`/reels/${video}`} autoPlay={false} loop playsInline>
            </video>
          </div>
        </SwiperSlide> 
        ))}
      </Swiper>
      </div>
  )
}
