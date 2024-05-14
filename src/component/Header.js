import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./header.css";
const Header = ({ isUserLogin, userName, handleLogout }) => {
  return (
    <div className="header">
      <div>Logo</div>
      <div>
        {isUserLogin ? (
          <>
            <Link to="/cart">
              <button>Cart</button>
            </Link>
            <Link to="/">
              {" "}
              <button onClick={handleLogout}>Logout</button>{" "}
            </Link>
          </>
        ) : (
          <>
            <Link to="/login">
              <button>Login</button>
            </Link>
          </>
        )}
        <button>{userName}</button>
      </div>
    </div>
  );
};

export default Header;
