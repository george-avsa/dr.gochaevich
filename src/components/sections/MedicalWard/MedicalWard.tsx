import React, { useContext } from "react";
import TittleButton from "../../ui/TittleButton/TittleButton";
import BlockTittle from "../../ui/BlockTittle/BlockTittle";
import MedicalWardSlider from "../../blocks/MedicalWardSlider/MedicalWardSlider";
import BgImage from "./../../../assets/images/medical-ward/webp/bg.webp";
import { Context } from "../../..";

export default function MedicalWard() {
  const { roomScreen } = useContext(Context);

  return (
    <div className="medical-ward">
      <div className="medical-ward__bg">
        <img src={BgImage} alt="" />
      </div>
      <div className="medical-ward__content">
        <div className="medical-ward__title">
          <TittleButton type="h2">{roomScreen.tag}</TittleButton>
          <BlockTittle>
            <>
              {roomScreen.title_row1} <span>{roomScreen.title_row2}</span>
            </>
          </BlockTittle>
        </div>
      </div>
      <MedicalWardSlider></MedicalWardSlider>
    </div>
  );
}
