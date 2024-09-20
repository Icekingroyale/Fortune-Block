import React, { useEffect, useState } from "react";
import "../stylesheets/Card.css";
import Plans from "../components/Plans";
// import { plansData } from "../Plans-data";

const Card = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    try {
      fetch("./Plans-data.json")
        .then((res) => res.json())
        .then((res) => {
          console.log(res);
          setData(res);
        });
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <div className="card-container">
      {data.map((item, i) => (
        <Plans
          key={i}
          title={item.title}
          rate={item.rate}
          time={item.time}
          item4={item.items[0]}
          item1={item.items[1]}
          item2={item.items[2]}
          item3={item.items[3]}
        />
      ))}

      
      {/* {plansData.map((item, i) => (
        <Plans
          key={i}
          title={item.title}
          rate={item.rate}
          time={item.time}
          item1={item.item1}
          item2={item.item2}
          item3={item.item3}
          item4={item.item4}
        />
      ))} */}
    </div>
  );
};

export default Card;
