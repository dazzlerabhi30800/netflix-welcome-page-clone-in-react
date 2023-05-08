import React, { useState } from "react";
import "./App.css";
import Home from "./Components/Homepage/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from "./Components/SignupPage/SignUp";

function App() {
  const [language, setLanguage] = useState("English");
  return (
    <Router>
      <>
        <Routes>
          <Route
            path="/"
            element={<Home language={language} setLanguage={setLanguage} />}
          />

          <Route
            path="/signin"
            element={<SignUp language={language} setLanguage={setLanguage} />}
          />
        </Routes>
      </>
    </Router>
  );
}

export default App;
