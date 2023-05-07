import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";
import data from "./AccordianData";
import SignupComp from "./SignupComp";

const Accordian = () => {
  const [accordianData, setAccordianData] = useState(data);
  const { t } = useTranslation();

  const showAnswer = (id) => {
    setAccordianData(
      accordianData.map((data) => {
        if (data.id === id) {
          return { ...data, ask: !data.ask };
        }
      })
    );
  };
  return (
    <div className="accordian--wrapper">
      <h3>Frequently Asked Questions</h3>
      <div className="accordian--container">
        {accordianData.map((data, index) => {
          return (
            <div className="accordian" key={index}>
              <div
                className="accordian--question"
                onClick={() => showAnswer(data.id)}
              >
                <h4>{t(`${data.question}`)}</h4>
                <FontAwesomeIcon icon={data.ask ? faMinus : faPlus} />
              </div>
              <div className={`accordian--answer ${data.ask ? "show" : ""}`}>
                {data.answers.map((answer, index) => {
                  return <p key={index}>{t(`${answer}`)}</p>;
                })}
              </div>
            </div>
          );
        })}
      </div>
      <SignupComp backgroundColor="transparent" />
    </div>
  );
};

export default Accordian;
