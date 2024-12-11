import React, { useContext } from "react";
import BlockTittle from "../../ui/BlockTittle/BlockTittle";
import TittleButton from "../../ui/TittleButton/TittleButton";
import SwiperButton from "../../ui/SwiperButton/SwiperButton";
import Image from "./../../../assets/images/consultation/webp/consultation.webp";
import ImageMd from "./../../../assets/images/consultation/webp/consultation-md.webp";
import ImageSm from "./../../../assets/images/consultation/webp/consultation-xs.webp";
import { Context } from "../../..";

export default function Consultation(props: { color?: string }) {
  const { consultationScreen } = useContext(Context);

  return (
    <div
      className={`consultation ${
        props.color === "grey" ? "consultation--grey" : ""
      }`}
    >
      <div className="consultation__content">
        <TittleButton type="h2">{consultationScreen.tag}</TittleButton>
        <BlockTittle className="consultation__tittle">
          <>
            {consultationScreen.title_row1}{" "}
            <span>{consultationScreen.title_row2}</span>
          </>
        </BlockTittle>
        <p className="consultation__description">
          {consultationScreen.description}
        </p>
        <SwiperButton
          color="black"
          className="consultation__button"
          link={{
            href: consultationScreen.consultation_button.link,
            target: "_blank",
          }}
        >
          {consultationScreen.consultation_button.text}
        </SwiperButton>
      </div>
      <div className="consultation__bg">
        <picture>
          <source
            media="(min-width: 1280px)"
            srcSet={`${process.env.REACT_APP_BASE_URL}/${consultationScreen?.image?.url}`}
            type="image/webp"
          />
          <source
            media="(min-width: 767px)"
            srcSet={`${process.env.REACT_APP_BASE_URL}/${consultationScreen?.desktopImage?.url}`}
            type="image/webp"
          />
          <img
            src={`${process.env.REACT_APP_BASE_URL}/${consultationScreen?.image?.url}`}
            alt=""
          />
        </picture>
      </div>
    </div>
  );
}
