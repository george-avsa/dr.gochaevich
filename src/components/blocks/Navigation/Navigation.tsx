import React, { useContext, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../../..";

export interface INavigation {
  name: string;
  idToScroll: string;
}
// export const navigationItems: Navigation[] = [
//   { name: "Операции", idToScroll: "services" },
//   { name: "Визуализация результата", idToScroll: "vizualisation" },
//   { name: "Клиника", idToScroll: "clinics" },
//   { name: "Результаты", idToScroll: "results" },
//   { name: "Ответы", idToScroll: "faq" },
// ];

export default function Navigation() {
  const navigate = useNavigate();

  const { navigationItems: navigation } = useContext(Context);

  const navigationItems = useMemo<INavigation[]>(() => {
    return (
      navigation
        ?.filter((navigationItem) => !navigationItem.isExternal)
        ?.map((navigationItem) => ({
          name: navigationItem.name,
          idToScroll: navigationItem.link,
        })) || []
    );
  }, [navigation]);

  const handleNavigationClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const idToScroll = e.currentTarget.dataset.idScroll;
    const elementToScroll = document.querySelector(`#${idToScroll}`);
    if (elementToScroll) {
      elementToScroll.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    } else {
      navigate(`/#${idToScroll}`);
    }
  };

  return (
    <nav className="navigation">
      {navigationItems?.map((navigationItem) => (
        <a
          className="navigation__link"
          key={navigationItem.idToScroll}
          onClick={handleNavigationClick}
          data-id-scroll={navigationItem.idToScroll}
        >
          {navigationItem.name}
        </a>
      ))}
    </nav>
  );
}
