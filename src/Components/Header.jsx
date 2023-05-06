import React from "react";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import "./Styles/style.css";
import LanguageSelector from "./LanguageSelector";

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
          <div>
            <p>
              Ready to Watch? Enter your email to create or restart your
              membership.
            </p>
            <form>
              <div className="input--container">
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  pattern="^\S[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                />
                <small>Email is not Valid</small>
              </div>
              <button onClick={(e) => e.preventDefault()} type="submit">
                Get Started <FontAwesomeIcon icon={faChevronRight} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
