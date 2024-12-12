import React, { useContext, useMemo } from "react";
import RubleIcon from "./../../../assets/icons/ruble.svg";
import { Context } from "../../..";
import { Price } from "../../../api/types";

type PriceService = { name: string; price: string };
type PriceType = { type: string; id: string; services: PriceService[] };

const handleNavigationClick = (e: React.MouseEvent<HTMLDivElement>) => {
  const idToScroll = e.currentTarget.dataset.idtoscroll;
  const elementToScroll = document.querySelector(`#${idToScroll}`);
  if (elementToScroll) {
    elementToScroll.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  }
};

export default function PriceList() {
  const { prices } = useContext(Context);

  const priceObject2 = useMemo(() => {
    if (prices.length) {
      return prices.reduce((acc: Record<string, PriceService[]>, price) => {
        if (acc[price.service.title]) {
          acc[price.service.title].push({
            name: price.name,
            price: `${new Intl.NumberFormat().format(price.price)}`,
          });
        } else {
          acc[price.service.title] = [
            {
              name: price.name,
              price: `${new Intl.NumberFormat().format(price.price)}`,
            },
          ];
        }
        return acc;
      }, {});
    }
    return {};
  }, [prices]);

  return (
    <div className="price-list">
      <div className="price-list__content">
        <div className="price-list-menu">
          {Object.keys(priceObject2).map((type) => (
            <div
              className="price-list-menu__item"
              onClick={handleNavigationClick}
              data-idToScroll={type}
              key={type}
            >
              {type}
            </div>
          ))}
        </div>
        <div className="price-list__list">
          <div className="price-list__disclaimer">
            *Стоимость работы не фиксированна и зависит от объема работ
          </div>
          {Object.entries(priceObject2).map(([type, services]) => (
            <React.Fragment key={type}>
              <h3 className="price-list__type-title" id={type}>
                {type}
              </h3>
              <div className="price-list__type-list">
                {services.map((service) => (
                  <div className="price-list-item" key={service.name}>
                    <p className="price-list-item__name">{service.name}</p>
                    <div className="price-list-item__separator"></div>
                    <div className="price-list-item__price">
                      <span>{service.price}</span>

                      <RubleIcon className="price-list-item__ruble-icon" />
                    </div>
                  </div>
                ))}
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}
