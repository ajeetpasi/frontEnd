import React, { useEffect, useState } from "react";
import DataCard from "./DataCard";
import Header from "./Header";
import "./body.css";
const Body = ({ isUserLogin }) => {
  const [CardData, setCardData] = useState([]);
  //   console.log("CardData", CardData);
  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    let data = await fetch("http://localhost:3000/products");
    let json = await data.json();
    console.log(json);
    let realData = await json.Array;
    console.log(realData);
    setCardData(json);
  };
  return (
    <div className="body">
      {CardData.map((item) => (
        <DataCard datas={item} isUserLogin={isUserLogin} />
      ))}
    </div>
  );
};

export default Body;
