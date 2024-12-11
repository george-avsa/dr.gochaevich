import React, { useContext } from "react";
import SwiperButton from "../SwiperButton/SwiperButton";

import { LazyLoadComponent } from "react-lazy-load-image-component";
import Video from "../Video/Video";
import { Context } from "../../..";

export default function BackgroundVideo() {
  const handleClickServices = (id: string) => {
    const elementToScroll = document.querySelector(`#${id}`) as HTMLElement;
    elementToScroll.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  };

  const { mainScreen } = useContext(Context);

  return (
    <div className="background-video">
      <LazyLoadComponent>
        <Video
          video={`${process.env.REACT_APP_BASE_URL}/${mainScreen.background.url}`}
        ></Video>
      </LazyLoadComponent>
      <div className="background-video__content">
        <h1 className="background-video__title">
          <span>{mainScreen.title_row_1}</span>
          <br /> {mainScreen.title_row_2}
        </h1>
        <div className="background-video__buttons">
          <SwiperButton
            color="white"
            handleClick={() =>
              handleClickServices(mainScreen.service_button.link)
            }
          >
            {mainScreen.service_button.text}
          </SwiperButton>
          <SwiperButton
            color="white"
            link={{
              href: mainScreen.consultation_button.link,
              target: "_blank",
            }}
          >
            {mainScreen.consultation_button.text}
          </SwiperButton>
        </div>
      </div>
    </div>
  );
}
