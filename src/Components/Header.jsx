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
            Sign In
          </a>
        </div>
      </nav>
      <div className="membership--wrapper">
        <h1>{t("Welcome to Netflix")}</h1>
        <p>Watch anywhere, Cancel anytime.</p>

        <div className="signup--wrapper">
          <SignupComp backgroundColor="#010C39" />
        </div>
      </div>
    </header>
  );
};

export default Header;
