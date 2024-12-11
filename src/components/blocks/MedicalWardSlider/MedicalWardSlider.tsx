import { Swiper, SwiperSlide } from "swiper/react";
import React, { useContext } from "react";
import WardIcon from "./../../../assets/icons/ward.svg";
import WardCardButton from "../../ui/WardCardButton/WardCardButton";
import MedicalCard1 from "./../../../assets/images/medical-ward/webp/medical-ward1.webp";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import { Context } from "../../..";

export default () => {
  const { rooms } = useContext(Context);

  return (
    <div className="medical-ward-slider">
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        loop
        autoplay={{
          delay: 5000,
        }}
        breakpoints={{
          450: {
            slidesPerView: 1.2,
            spaceBetween: 16,
            loop: false,
            autoplay: false,
          },
          768: {
            slidesPerView: "auto",
            spaceBetween: 16,
            loop: false,
            autoplay: false,
          },
        }}
        modules={[Autoplay]}
        className="medical-ward-slider__slider"
      >
        {rooms.map((smth) => (
          <SwiperSlide key={smth.id} className="medical-ward-slider__slide">
            <div className="ward-slider-card">
              <div className="ward-slider-card__content">
                <div>
                  <div className="ward-slider-card__title-block">
                    <div className="ward-slider-card__icon">
                      <WardIcon />
                    </div>
                    <h4 className="ward-slider-card__title">{smth.name}</h4>
                  </div>
                  <p className="ward-slider-card__description">
                    {smth.description}
                  </p>
                </div>
                <div className="ward-slider-card__buttons">
                  {smth.room_advantages.map((room_advantage) => (
                    <WardCardButton text={room_advantage.name} />
                  ))}
                </div>
              </div>
              <div className="ward-slider-card__image">
                <img
                  src={`${process.env.REACT_APP_BASE_URL}/${smth?.image?.url}`}
                  alt=""
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
