import React from "react";
import Navbar from "../Homepage/Navbar";
import { useTranslation } from "react-i18next";
import "../Styles/SignStyle.css";
import SignInput from "./SignInput";

const SignUp = ({ language, setLanguage }) => {
  const { t } = useTranslation();
  const linkText = t("back_to_home");
  return (
    <div className="signup--comp">
      <Navbar
        location={"/"}
        linkText={linkText}
        language={language}
        setLanguage={setLanguage}
      />
      <SignInput />
    </div>
  );
};

export default SignUp;
