import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import i18next from "i18next";

const SignInput = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showInfo, setShowInfo] = useState(false);
  const { t } = useTranslation();
  return (
    <main>
      <div className="signin--input">
        <h1>{t("sign_in")}</h1>
        <form>
          <div className="input--wrapper">
            <input type="email" placeholder={t("email_input")} id="email" />
            <small className="alert">Please enter a valid email address.</small>
          </div>
          <div className="input--wrapper password--wrapper">
            <input
              type={showPassword ? "text" : "password"}
              placeholder={t("password")}
              id="password"
            />
            <span onClick={() => setShowPassword((prevState) => !prevState)}>
              {showPassword ? t("hide") : t("show")}
            </span>
          </div>
          <div className="button--wrapper">
            <button onClick={(e) => e.preventDefault()} type="submit">
              {t("sign_in")}
            </button>
            <div className="remember--container">
              <div className="checkbox">
                <input type="checkbox" />
                <p>{t("remember_me")}</p>
              </div>
              <span>{t("help")}</span>
            </div>
          </div>
        </form>
        <div className="additional--links">
          <div className="home--link">
            <p>{t("new_to_netflix")}</p>
            <a href="#" onClick={(e) => e.preventDefault()}>
              {t("sign_up")}
            </a>
          </div>
          <div className="additional--info">
            <p>
              {t("captcha_para_1")}{" "}
              <span onClick={() => setShowInfo((prevState) => !prevState)}>
                {showInfo ? t("captcha_span_2") : t("captcha_span_1")}
              </span>
            </p>
            {i18next.language === "en" ? (
              <p style={{ display: showInfo ? "block" : "none" }}>
                The information collected by Google reCAPTCHA is subject to the
                Google <span>Privacy Policy</span> and
                <span> Terms of Service</span>, and is used for providing,
                maintaining, and improving the reCAPTCHA service and for general
                security purposes (it is not used for personalised advertising
                by Google).
              </p>
            ) : (
              <p style={{ display: showInfo ? "block" : "none" }}>
                Google reCAPTCHA से इकट्ठा की गई जानकारी Google{" "}
                <span>प्रायवेसी पॉलिसी</span> और <span>सेवा की शर्तों</span> के
                अधीन है. इसे reCAPTCHA सेवा देने, उसे बनाए रखने और सुधारने के
                लिए और सामान्य सुरक्षा उद्देश्य के लिए इस्तेमाल किया जाता है
                (Google इसका इस्तेमाल करके पर्सनलाईज़ किए गए विज्ञापन नहीं
                दिखाता).
              </p>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default SignInput;
