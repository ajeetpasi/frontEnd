import React from "react";
import "./datacard.css";
const DataCard = ({ datas, isUserLogin }) => {
  const postData = () => {
    let data = fetch("http://localhost:3000/cart", {
      method: "POST",
      body: JSON.stringify(datas),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    let id = datas.id;
    console.log(id);
    localStorage.setItem("item_id", id);
  };

  return (
    <div className="coll">
      <img
        src="https://cdn.pixabay.com/photo/2017/07/28/05/12/i-phone-2547677_1280.jpg"
        alt="img"
        width="200px"
      />
      <h3>{datas.title}</h3>
      <h6>{datas.category}</h6>
      {isUserLogin && <button onClick={() => postData()}>Add to Cart</button>}
    </div>
  );
};

export default DataCard;
