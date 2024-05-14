import { useState } from "react";
import "./App.css";
import Body from "./component/Body";
import Signup from "./component/signup";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Header from "./component/Header";
import SingnIn from "./component/singnIn";
import Cart from "./component/Cart";
function App() {
  const [isUserLogin, setIsUserLogin] = useState(false);

  function handleLogout() {
    setIsUserLogin(false);
    setUserName("Default User");
  }

  const [userName, setUserName] = useState("Default User");
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <Header
            isUserLogin={isUserLogin}
            userName={userName}
            handleLogout={handleLogout}
            setIsUserLogin={setIsUserLogin}
          />
        </div>
        <Routes>
          <Route path="/" element={<Body isUserLogin={isUserLogin} />}></Route>
          <Route
            path="/login"
            element={
              <SingnIn
                setIsUserLogin={setIsUserLogin}
                setUserName={setUserName}
              />
            }
          ></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route
            path="/cart"
            element={<Cart isUserLogin={isUserLogin} />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
