import React, { useEffect, useState } from "react";

const Cart = (datas) => {
  let id = datas.id;
  console.log(id);
  const [cartData, SetCartData] = useState([]);
  const [itemId, setItemId] = useState();
  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    let data = await fetch("http://localhost:3000/cart");
    let json = await data.json();
    let id = datas.id;
    console.log(id);
    SetCartData(json);
  };

  async function deleteData(itemId) {
    let data = await fetch(`http://localhost:3000/cart/${itemId}`, {
      method: "DELETE",
    });
    alert("Post deleted");
  }

  return (
    <div>
      <h1>Cart</h1>
      <h1> Total Items: {cartData.length}</h1>
      {cartData.map((item, index) => (
        <div>
          <h1>{item.title}</h1>
          <h1>{item.price}</h1>
          <button
            onClick={() => {
              deleteData(item.id);
              //   console.log(item.id);
            }}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default Cart;
