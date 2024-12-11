import React, { useContext } from "react";
import LogoIcon from "./../../../assets/icons/logo.svg";
import BlockTittle from "../../ui/BlockTittle/BlockTittle";
import ZurabImage from "../../../assets/images/clinics/png/zurab.png";
import ClinicsSlider from "../../blocks/ClinicsSlider/ClinicsSlider";
import { Context } from "../../..";

export default function Clinics() {
  const { clinicScreen } = useContext(Context);

  return (
    <div className="clinics" id="clinics">
      <div className="clinics__bg">
        <img
          src={`${process.env.REACT_APP_BASE_URL}/${clinicScreen?.zurab_image?.url}`}
          alt=""
        />
      </div>
      <div className="clinics__content">
        <LogoIcon style={{ color: "#3E4041" }} />
        <BlockTittle className="clinics__tittle">
          <>{clinicScreen.title_row1}</>
        </BlockTittle>
        <h2 className="clinics__name">{clinicScreen.title_row2}</h2>
        <p className="clinics__description">{clinicScreen.description}</p>
        <ClinicsSlider></ClinicsSlider>
      </div>
    </div>
  );
}
