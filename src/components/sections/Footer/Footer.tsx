import React, { useContext, useMemo } from "react";
import LogoIcon from "./../../../assets/icons/logo.svg";
import ContactInfo from "../../ui/ContactInfo/ContactInfo";
import Button from "../../ui/Button/Button";
import { useNavigate } from "react-router-dom";
import { Context } from "../../..";
import { INavigation } from "../../blocks/Navigation/Navigation";

export default function Footer() {
  const navigate = useNavigate();

  const handleNavigationClick = (e: React.MouseEvent<HTMLLIElement>) => {
    const idToScroll = e.currentTarget.dataset.idtoscroll;
    const elementToScroll = document.querySelector(`#${idToScroll}`);
    if (elementToScroll) {
      elementToScroll.scrollIntoView({
        behavior: "smooth",
        block: idToScroll === "faq" ? "start" : "end",
        inline: "nearest",
      });
    } else {
      navigate(`/#${idToScroll}`);
    }
  };

  const {
    navigationItems: navigation,
    contacts,
    consultationScreen: { consultation_button },
  } = useContext(Context);

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

  return (
    <footer className="footer" id="footer">
      <div className="footer__content">
        <div className="footer__logo-navigation">
          <div className="footer__logo-location">
            <LogoIcon style={{ color: "white" }} />
            <p className="footer__location">Москва</p>
          </div>
          <div className="footer-navigation">
            {navigationItems?.map((navigationItem) => (
              <span
                onClick={handleNavigationClick}
                className="footer-navigation__item"
                data-idToScroll={navigationItem.idToScroll}
                key={navigationItem.idToScroll}
              >
                {navigationItem.name}
              </span>
            ))}
          </div>
        </div>
        <div className="footer__contacts">
          <>
            {contacts.map((contact) => (
              <ContactInfo
                name={contact.type}
                className="footer__contact-info"
                link={{ text: contact.text, href: contact.link }}
              ></ContactInfo>
            ))}
          </>

          <Button
            link={consultation_button.link}
            target="_blank"
            color="white"
            padding="9px 20px"
            className="footer__consultation-button"
          >
            {consultation_button.text}
          </Button>
        </div>
      </div>
    </footer>
  );
}
