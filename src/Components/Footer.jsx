import React from "react";
import data from "./LinksData";
import LanguageSelector from "./LanguageSelector";
import { useTranslation } from "react-i18next";

const Footer = ({ language, setLanguage }) => {
  const { t } = useTranslation();
  return (
    <footer>
      <h5 className="call">{t("call")}</h5>
      <ul className="links">
        {data.map((link, index) => {
          return (
            <li key={index}>
              <a onClick={(e) => e.preventDefault()} href="#">
                {t(`${link}`)}
              </a>
            </li>
          );
        })}
      </ul>
      <LanguageSelector language={language} setLanguage={setLanguage} />
      <p>Netflix {t("country")}</p>
    </footer>
  );
};

export default Footer;
