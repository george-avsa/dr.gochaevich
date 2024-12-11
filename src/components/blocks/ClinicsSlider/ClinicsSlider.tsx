import React, { useContext } from "react";
import LocationIcon from "./../../../assets/icons/locationDark.svg";
import ZurabImage from "../../../assets/images/clinics/webp/zhukovka_mobile.webp";
import { Context } from "../../..";
import { Clinic } from "../../../api/types";

export default function ClinicsSlider() {
  const { clinicsData, clinicScreen } = useContext(Context);

  // const clinics: Clinic[] = [
  //   {
  //     name: "Институт пластической хирургии и косметологии",
  //     address: "г. Москва, Ольховская 27",
  //     image: iphkImage,
  //   },
  //   {
  //     name: 'Клиника "Жуковка"',
  //     address: "Рублево-Успенское ш., деревня Жуковка, 72",
  //     image: ZhukovkaImage,
  //   },
  // ];

  return (
    <div className="clinics-slider">
      <img
        src={`${process.env.REACT_APP_BASE_URL}/${clinicScreen?.zurab_image?.url}`}
        alt=""
      />
      <div className="clinics-slider__button">{clinicScreen.tag}</div>
      <div className="clinics-slider__content">
        {clinicsData.map((clinic: Clinic) => (
          <div className="clinics-slider-item">
            {/* <img src={image} alt="" /> */}
            <div
              className="clinics-slider-item__image"
              style={{
                backgroundImage: `url(${process.env.REACT_APP_BASE_URL}/${clinic?.image?.url})`,
              }}
            ></div>
            <div className="clinics-slider-item__content">
              <h5 className="clinics-slider-item__name">{clinic.name}</h5>
              <div className="clinic-address">
                <LocationIcon className="clinic-address__icon" />
                <p className="clinic-address__text">{clinic.adress}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
