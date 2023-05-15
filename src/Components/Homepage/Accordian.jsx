import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import SignupComp from "./SignupComp";
import { useTranslation } from "react-i18next";
import data2 from "./AccordianTransData";

const Accordian = () => {
  const [accData, setAccData] = useState(data2);
  const { t } = useTranslation();

  const showAnswer = (id) => {
    setAccData(
      accData.map((data) => {
        if (data.id === id) {
          return { ...data, ask: !data.ask };
        }
        return { ...data, ask: false };
      })
    );
  };
  return (
    <div className="accordian--wrapper">
      <h3>{t("accordian_heading")}</h3>
      <div className="accordian--container">
        {accData.map((data, index) => {
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
                <p>{t(`${data.answer1}`)}</p>
                {data.answer2 && <p>{t(`${data.answer2}`)}</p>}
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
