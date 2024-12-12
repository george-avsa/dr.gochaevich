import React, { useEffect, useLayoutEffect, useRef } from "react";
import { Service } from "../../../store/services";
import gsap from "gsap";

type ServiceBackgorund = {
  service: Service;
};

export default function ServicesBackgorund({ service }: ServiceBackgorund) {
  const imgRef = useRef<HTMLInputElement>(null);
  const bgRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    function placeBackgorund() {
      setTimeout(() => {
        const contentElement = document.querySelector(
          ".services__wrapper"
        ) as HTMLElement;

        const bgElement = bgRef.current as HTMLElement;
        const imgElement = imgRef.current as HTMLElement;

        if (contentElement && imgElement) {
          const leftContent =
            Number.parseInt(getComputedStyle(contentElement)?.marginLeft) || 0;

          const leftImg =
            Number.parseInt(getComputedStyle(imgElement).left) || 0;
          bgElement.style.left = `${40 + leftContent - leftImg}px`;
        }
      }, 1000);
    }

    placeBackgorund();
    document.addEventListener("resize", placeBackgorund);
  }, [service]);

  useEffect(() => {
    const tl = gsap.timeline();
    if (service.active) {
      tl.to(bgRef.current, { opacity: 1, duration: 1 });
    } else {
      tl.to(bgRef.current, { opacity: 0, duration: 1 });
    }
  }, [service.active]);

  return (
    <div
      ref={bgRef}
      className={`services-bg services-bg--${service.image.type} ${
        !service.active ? "services-bg--hidden" : ""
      }`}
    >
      {service.image.type !== "blefaroplasty" && (
        <img src={service?.image?.image} alt="" className="services-bg-image" />
      )}
      <div className="services-bg__image" ref={imgRef}>
        <img src={service?.image?.image} className="services-bg__img" alt="" />
      </div>
    </div>
  );
}
