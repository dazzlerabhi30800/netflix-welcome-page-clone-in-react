import React from "react";
import Header from "./Header";
import InfoSection from "./InfoSection";
import Accordian from "./Accordian";
import Footer from "./Footer";
import { useTranslation } from "react-i18next";

const Home = ({ language, setLanguage }) => {
  const { t } = useTranslation();
  const signText = t("sign_in");
  return (
    <>
      <Header
        location={"/signin"}
        linkText={signText}
        language={language}
        setLanguage={setLanguage}
      />
      <main>
        <InfoSection />
        <Accordian />
      </main>
      <Footer language={language} setLanguage={setLanguage} />
    </>
  );
};

export default Home;
