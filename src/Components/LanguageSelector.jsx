import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe, faCaretDown } from "@fortawesome/free-solid-svg-icons";
import i18next from "i18next";

const LanguageSelector = () => {
  const [language, setLanguage] = useState("English");
  const [showMenu, setShowMenu] = useState(false);
  return (
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
          data-lang="en"
          onClick={(e) => {
            setLanguage(e.target.textContent);
            setShowMenu(false);
            i18next.changeLanguage(e.target.dataset.lang);
          }}
        >
          English
        </div>
        <div
          className="option"
          data-lang="hi"
          onClick={(e) => {
            setLanguage(e.target.textContent);
            setShowMenu(false);
            i18next.changeLanguage(e.target.dataset.lang);
          }}
        >
          हिंदी
        </div>
      </div>
    </div>
  );
};

export default LanguageSelector;
