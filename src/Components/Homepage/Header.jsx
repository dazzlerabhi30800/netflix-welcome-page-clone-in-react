import React from "react";
import { useTranslation } from "react-i18next";
import "../Styles/style.css";
import SignupComp from "./SignupComp";
import Navbar from "./Navbar";

const Header = ({ location, linkText, language, setLanguage }) => {
  const { t } = useTranslation();
  return (
    <header>
      <Navbar
        location={location}
        linkText={linkText}
        language={language}
        setLanguage={setLanguage}
      />
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
