import React from "react";
import LanguageSelector from "./LanguageSelector";
import { Link } from "react-router-dom";

const Navbar = ({ location, linkText, language, setLanguage }) => {
  return (
    <nav>
      <img src="./logo.svg" alt="Netflix" />
      <div className="links--container">
        <LanguageSelector language={language} setLanguage={setLanguage} />
        <Link className="signin--btn" to={location}>
          {linkText}
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
