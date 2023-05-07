import React, { useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import InfoSection from "./Components/InfoSection";
import Accordian from "./Components/Accordian";
import Footer from "./Components/Footer";

function App() {
  const [language, setLanguage] = useState("English");
  return (
    <>
      <Header language={language} setLanguage={setLanguage} />
      <main>
        <InfoSection />
        <Accordian />
      </main>
      <Footer language={language} setLanguage={setLanguage} />
    </>
  );
}

export default App;
