import React, { useContext, useEffect } from "react";
import Logo from "./../../../assets/icons/logo.svg";
import ServicesBackgorunds from "../../blocks/ServicesBackgorunds/ServicesBackgorunds";
import ServiceList from "../../blocks/ServiceList/ServiceList";
import ServicesBackgorundMobile from "../../blocks/ServicesBackground/ServicesBackgorundMobile";
import { Link } from "react-router-dom";
import { Context } from "../../..";
import { useDispatch } from "react-redux";
import { setServices } from "../../../store/services";

export default function Services() {
  const dispatch = useDispatch();

  const { services, serviceScreen } = useContext(Context);

  useEffect(() => {
    if (services.length) {
      dispatch(setServices(services));
    }
  }, [services]);

  return (
    <div className="services" id="services">
      <ServicesBackgorunds></ServicesBackgorunds>
      <div className="services__wrapper">
        <div className="services__content">
          <Logo />
          <h3 className="services__title">{serviceScreen.title}</h3>
          <ServicesBackgorundMobile></ServicesBackgorundMobile>
          <ServiceList></ServiceList>
          <Link to={serviceScreen.all_service_button.link}>
            <div className="services__button">
              {serviceScreen.all_service_button.text}
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
