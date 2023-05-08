import React from "react";
import data from "./InfoData";
import { useTranslation } from "react-i18next";

const InfoSection = () => {
  const { t } = useTranslation();
  return (
    <div className="info--section">
      {data.map((item, index) => {
        return (
          <div className="info" key={index}>
            <div className="info--text">
              <h2>{t(`${item.title}`)}</h2>
              <p>{t(`${item.desc}`)}</p>
            </div>
            <img src={item.img} alt={item.title} />
          </div>
        );
      })}
    </div>
  );
};

export default InfoSection;
