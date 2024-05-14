import React, { useEffect, useState } from "react";
import "./cart.css";
const Cart = ({ isUserLogin }) => {
  const [cartData, SetCartData] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    getData();
    calculateTotalPrice();
  }, [cartData]);
  const getData = async () => {
    let data = await fetch("http://localhost:3000/cart");
    let json = await data.json();
    console.log(json);
    SetCartData(json);
  };

  let itemIds = localStorage.getItem("item_id");
  console.log(itemIds);
  async function deleteData(itemIds) {
    let data = await fetch(`http://localhost:3000/cart/${itemIds}`, {
      method: "DELETE",
    });

    alert("Post deleted");
    getData();
    //console.log(id);
  }

  const calculateTotalPrice = () => {
    let totalPrice = cartData.reduce((acc, item) => acc + item.price, 0);
    setTotalPrice(totalPrice);
  };

  return (
    <div>
      💛
      {isUserLogin ? (
        <>
          <h1>Cart</h1>
          <h1> Total Items: {cartData.length}</h1>
          <h2>Total Price: ${totalPrice.toFixed(2)}</h2>{" "}
          {/* Display total price */}
          <div className="cart">
            {cartData.map((item, index) => (
              <>
                <div className="singlecart">
                  <h3>{item.title}</h3>
                  <h6>${item.price.toFixed(2)}</h6>
                  <button onClick={() => deleteData(item.id)}>Delete</button>
                </div>
              </>
            ))}
          </div>
        </>
      ) : (
        <div>
          <h1>Login to See Cart Items</h1>
          <button>Login</button>
        </div>
      )}
    </div>
  );
};

export default Cart;
