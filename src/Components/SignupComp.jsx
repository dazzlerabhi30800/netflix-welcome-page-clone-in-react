import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";

const SignupComp = ({ backgroundColor }) => {
  const { t } = useTranslation();
  return (
    <div
      style={{ backgroundColor: backgroundColor }}
      className="signup--container"
    >
      <p>{t("ready_to_watch")}</p>
      <form>
        <div className="input--container">
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            pattern="\S+@\S+.\S+"
          />
          <small>Email is not Valid</small>
        </div>
        <button onClick={(e) => e.preventDefault()} type="submit">
          Get Started <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </form>
    </div>
  );
};

export default SignupComp;
