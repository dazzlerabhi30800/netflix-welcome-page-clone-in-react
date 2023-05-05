import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGlobe,
  faCaretDown,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import "./Styles/style.css";

const Header = () => {
  const [language, setLanguage] = useState("English");
  const [showMenu, setShowMenu] = useState(false);
  return (
    <header>
      <nav>
        <img src="./logo.svg" alt="Netflix" />
        <div className="links--container">
          <div className="language--selector">
            <div
              className={`language ${showMenu ? "open" : ""} `}
              onClick={() => setShowMenu((prevState) => !prevState)}
            >
              <FontAwesomeIcon icon={faGlobe} />
              <span>{language}</span>
              <FontAwesomeIcon icon={faCaretDown} />
            </div>
            <div className={`dropdown--menu ${showMenu ? "show" : ""}`}>
              <div
                className="option"
                onClick={(e) => {
                  setLanguage(e.target.textContent);
                  setShowMenu(false);
                }}
              >
                English
              </div>
              <div
                onClick={(e) => {
                  setLanguage(e.target.textContent);
                  setShowMenu(false);
                }}
                className="option"
              >
                हिंदी
              </div>
            </div>
          </div>
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
        <h1>Unlimited movies, TV shows and more</h1>
        <p>Watch anywhere, Cancel anytime.</p>

        <div className="signup--wrapper">
          <div>
            <p>
              Ready to Watch? Enter your email to create or restart your
              membership.
            </p>
            <form>
              <div className="input--container">
                <input type="email" placeholder="Enter your email" />
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
