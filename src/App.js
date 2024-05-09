import { useState } from "react";
import "./App.css";
import Body from "./component/Body";
import Signup from "./component/signup";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./component/Header";
import SingnIn from "./component/singnIn";
import Cart from "./component/Cart";
function App() {
  const [isUserLogin, setIsUserLogin] = useState(true);
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <Header isUserLogin={isUserLogin} />
        </div>
        <Routes>
          <Route path="/" element={<Body />}></Route>
          <Route path="/login" element={<SingnIn />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
