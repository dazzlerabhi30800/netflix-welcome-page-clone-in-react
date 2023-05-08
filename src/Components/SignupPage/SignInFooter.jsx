import React from "react";
import LanguageSelector from "../Homepage/LanguageSelector";
import { useTranslation } from "react-i18next";

const SignInFooter = ({ language, setLanguage }) => {
  const { t } = useTranslation();
  return (
    <footer>
      <h5 className="call">{t("call")}</h5>
      <ul className="links">
        <li>
          <a onClick={(e) => e.preventDefault()} href="#">
            {t("links.link_1")}
          </a>
        </li>
        <li>
          <a onClick={(e) => e.preventDefault()} href="#">
            {t("links.link_2")}
          </a>
        </li>
        <li>
          <a onClick={(e) => e.preventDefault()} href="#">
            {t("links.link_8")}
          </a>
        </li>
        <li>
          <a onClick={(e) => e.preventDefault()} href="#">
            {t("links.link_9")}
          </a>
        </li>
        <li>
          <a onClick={(e) => e.preventDefault()} href="#">
            {t("links.link_10")}
          </a>
        </li>
        <li>
          <a onClick={(e) => e.preventDefault()} href="#">
            {t("links.link_11")}
          </a>
        </li>
      </ul>
      <LanguageSelector language={language} setLanguage={setLanguage} />
    </footer>
  );
};

export default SignInFooter;
