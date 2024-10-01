import React from "react";
import "../stylesheets/Plans.css";
// import plansData from "../Plans-data";

const Plans = ({ title, rate, time, item1, item2, item3, item4 }) => {
  return (
    <div className="plans-container">
      <div className="plans-header">
        <h6>{title}</h6>
        <h2>
          {rate}
          <span>/{time}</span>
        </h2>
        <hr />
      </div>
      <div className="plans-body">
        <ul>
          <li>{item4}</li>
          <li>{item1}</li>
          <li>{item2}</li>
          <li>{item3}</li>
        </ul>
        <button> BUY </button>
      </div>
    </div>
  );
};

export default Plans;
