import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";

const SignupComp = ({ backgroundColor }) => {
  const inputData = [
    "input_container.input_text",
    "input_container.small_text",
    "input_container.start_btn",
  ];
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
            placeholder={t(`${inputData[0]}`)}
            pattern="\S+@\S+.\S+"
          />
          <small>{t(`${inputData[1]}`)}</small>
        </div>
        <button onClick={(e) => e.preventDefault()} type="submit">
          {t(`${inputData[2]}`)} <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </form>
    </div>
  );
};

export default SignupComp;
