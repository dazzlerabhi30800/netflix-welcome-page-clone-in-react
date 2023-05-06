import React from "react";
import data from "./InfoData";

const InfoSection = () => {
  console.log(data);
  return (
    <div className="info--section">
      {data.map((item, index) => {
        return (
          <div className="info" key={index}>
            <div className="info--text">
              <h2>{item.title}</h2>
              <p>{item.desc}</p>
            </div>
            <img src={item.img} alt={item.title} />
          </div>
        );
      })}
    </div>
  );
};

export default InfoSection;
