import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const postData = () => {
    let obj = {
      username,
      password,
    };
    let data = fetch("http://localhost:3000/user", {
      method: "POST",
      body: JSON.stringify(obj),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
  };

  function handlesubmit() {
    postData();
    navigate("/login");
  }
  return (
    <div>
      <h1>SiGnUp Page</h1>
      <from onSubmit={handlesubmit}>
        <div>
          <label>UserName</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label>UserPassword</label>
          <input
            type="text"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <input type="submit" onClick={handlesubmit} />
      </from>
    </div>
  );
};

export default Signup;
