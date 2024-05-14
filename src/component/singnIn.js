import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const SingnIn = ({ setUserName, setIsUserLogin }) => {
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState([]);
  console.log(loginData);
  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    let data = await fetch("http://localhost:3000/user");
    let json = await data.json();

    setLoginData(json);
  };

  const handlesubmit = (event) => {
    event.preventDefault();
    const uname = event.target.elements.email.value;
    const pass = event.target.elements.password.value;
    setUserName(uname);
    const userData = loginData.find((user) => user.username === uname);

    if (userData) {
      if (userData.password !== pass) {
        alert("Enter Pass");
      } else {
        navigate("/");
        setIsUserLogin(true);
      }
    } else {
      alert("Please enter All details");
    }
  };
  return (
    <div>
      <form onSubmit={handlesubmit}>
        <div>
          <label>UserName</label>
          <input type="text" name="email" />
        </div>
        <div>
          <label>UserPassword</label>
          <input type="text" name="password" />
        </div>
        <input type="submit" />
      </form>
    </div>
  );
};

export default SingnIn;
