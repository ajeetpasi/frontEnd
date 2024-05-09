import React from "react";
import { Link } from "react-router-dom";

const Header = ({ isUserLogin }) => {
  return (
    <div>
      <div>Logo</div>
      {isUserLogin && (
        <Link to="/cart">
          <button>Cart</button>
        </Link>
      )}

      <Link to="/login">
        <button>Login</button>
      </Link>

      {isUserLogin && <button>UserName</button>}
    </div>
  );
};

export default Header;
