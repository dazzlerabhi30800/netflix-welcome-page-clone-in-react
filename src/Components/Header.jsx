import React from "react";
import { useTranslation } from "react-i18next";
import "./Styles/style.css";
import LanguageSelector from "./LanguageSelector";
import SignupComp from "./SignupComp";

const Header = () => {
  const { t } = useTranslation();
  return (
    <header>
      <nav>
        <img src="./logo.svg" alt="Netflix" />
        <div className="links--container">
          <LanguageSelector />
          <a
            className="signin--btn"
            href="#"
            onClick={(e) => e.preventDefault()}
          >
            {t("sign_in")}
          </a>
        </div>
      </nav>
      <div className="membership--wrapper">
        <h1>{t("welcome_to_netflix")}</h1>
        <p>{t("watch_anywhere")}</p>

        <div className="signup--wrapper">
          <SignupComp backgroundColor="#010C39" />
        </div>
      </div>
    </header>
  );
};

export default Header;
