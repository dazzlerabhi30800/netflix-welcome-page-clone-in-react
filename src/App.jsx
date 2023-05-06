import React from "react";
import "./App.css";
import Header from "./Components/Header";
import InfoSection from "./Components/InfoSection";
import Accordian from "./Components/Accordian";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <Header />
      <main>
        <InfoSection />
        <Accordian />
      </main>
      <Footer />
    </>
  );
}

export default App;
