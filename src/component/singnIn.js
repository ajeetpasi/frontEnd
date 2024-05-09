import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const SingnIn = () => {
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState([]);
  const [errorMessages, setErrorMessages] = useState({});

  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    let data = await fetch("http://localhost:3000/user");
    let json = await data.json();
    let realData = json[0];
    setLoginData(json);
    console.log(realData);
  };

  const handlesubmit = (event) => {
    event.preventDefault();
    const uname = event.target.elements.email.value;
    const pass = event.target.elements.password.value;

    const userData = loginData.find((user) => user.username === uname);
    if (userData) {
      if (userData.password !== pass) {
        alert("Enter details");
      } else {
        navigate("/signup");
      }
    } else {
      alert("wrong pass");
    }
  };
  return (
    <div>
      <from onSubmit={handlesubmit}>
        <div>
          <label>UserName</label>
          <input type="text" name="email" />
        </div>
        <div>
          <label>UserPassword</label>
          <input type="text" name="password" />
        </div>
        <input type="submit" />
      </from>
    </div>
  );
};

export default SingnIn;
