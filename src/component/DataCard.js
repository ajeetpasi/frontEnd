import React from "react";
import "./datacard.css";
const DataCard = ({ datas }) => {
  const postData = () => {
    let data = fetch("http://localhost:3000/cart", {
      method: "POST",
      body: JSON.stringify(datas),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
  };

  return (
    <div className="coll">
      <h3>{datas.title}</h3>
      <h6>{datas.category}</h6>
      <button onClick={() => postData()}>Add to Cart</button>
    </div>
  );
};

export default DataCard;
