import React from "react";
import data from "./LinksData";
import LanguageSelector from "./LanguageSelector";

const Footer = () => {
  return (
    <footer>
      <h5 className="call">
        Questions? Call <span>000-800-919-1694</span>
      </h5>
      <ul className="links">
        {data.map((link, index) => {
          return (
            <li key={index}>
              <a onClick={(e) => e.preventDefault()} href="#">
                {link}
              </a>
            </li>
          );
        })}
      </ul>
      <LanguageSelector />
      <p>Netflix India</p>
    </footer>
  );
};

export default Footer;
