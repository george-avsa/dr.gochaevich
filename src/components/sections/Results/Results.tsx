import React, { useContext } from "react";
import TittleButton from "../../ui/TittleButton/TittleButton";
import BlockTittle from "../../ui/BlockTittle/BlockTittle";
import ResultBg from "./../../../assets/images/services/webp/servicesBg.webp";

import resultsEye from "./../../../assets/images/services/webp/eye.webp";
import resultStar from "./../../../assets/images/services/webp/star.webp";
import resultFlower from "./../../../assets/images/services/webp/flower.webp";
import resultIphonesMobile from "./../../../assets/images/services/webp/iphones-mobile.webp";
import resultIphones from "./../../../assets/images/services/webp/iphones.webp";

import resultVizualisation from "./../../../assets/images/services/webp/vizualisation.webp";
import SwiperButton from "../../ui/SwiperButton/SwiperButton";
import { Context } from "../../..";

type Advantage = {
  title: string;
  description: JSX.Element;
  image: string;
};

export default function Results() {
  const { goalScreen, goals, visualizationScreen, resultScreen } =
    useContext(Context);

  return (
    <div className="results">
      <div className="results__bg">
        <img src={ResultBg} alt="" />
      </div>
      <div className="results__content">
        <div>
          <div className="results__title">
            <TittleButton type="h2">{goalScreen.tag}</TittleButton>
            <BlockTittle>
              <>
                {goalScreen.title_row1}
                <br />
                <span>{goalScreen.title_row2}</span>
              </>
            </BlockTittle>
          </div>
          <div className="result-cards">
            {goals?.map((advantage) => (
              <div className="result-cards__item">
                <div className="result-cards__bg">
                  <img
                    src={`${process.env.REACT_APP_BASE_URL}/${advantage?.image?.url}`}
                    alt=""
                  />
                </div>
                <h5 className="result-cards__title">{advantage.title}</h5>
                <p className="result-cards__description">
                  {advantage.description}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="vizualisation" id="vizualisation">
          <div className="vizualisation__bg">
            <img src={resultVizualisation} alt="" />
            <div className="vizualisation__image">
              <img src={resultVizualisation} alt="" />
            </div>
          </div>
          <div className="vizualisation__content">
            <TittleButton type="h3">{visualizationScreen.tag}</TittleButton>
            <h3 className="vizualisation__title">
              <>{visualizationScreen.title}</>
            </h3>
            <p className="vizualisation__description">
              {visualizationScreen.description}
            </p>
            <SwiperButton
              className="vizualisation__button"
              color="black"
              link={{
                href: visualizationScreen.consultation_button.link,
                target: "_blank",
              }}
            >
              {visualizationScreen.consultation_button.text}
            </SwiperButton>
          </div>
        </div>
        <div className="results-block" id="results">
          <div>
            <TittleButton type="h3">{resultScreen.tag}</TittleButton>
            <h3 className="results-block__title">
              <>{resultScreen.title}</>
            </h3>
            <p className="results-block__description">
              {resultScreen.description}
            </p>
            <SwiperButton
              color="black"
              className="results-block__button"
              link={{
                href: "https://www.instagram.com/dr.gochaevich/",
                target: "_blank",
              }}
            >
              {resultScreen.instagram_button.text}
            </SwiperButton>
          </div>
          <p className="results-block__footnote">
            *принадлежит компании Meta, является террористической организацией
          </p>
          <div className="results-block__bg">
            <picture>
              <source
                media="(min-width: 500px)"
                srcSet={`${process.env.REACT_APP_BASE_URL}/${resultScreen?.desktopImage?.url}`}
                type="image/webp"
              />
              <img
                src={`${process.env.REACT_APP_BASE_URL}/${resultScreen?.image?.url}`}
                alt=""
              />
            </picture>
          </div>
        </div>
      </div>
    </div>
  );
}
