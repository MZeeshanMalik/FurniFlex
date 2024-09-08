// App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Features/Home";
import Cart from "./Features/cart/Cart";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Signup from "./Features/Signup";
import Login from "./Features/Login";

const App = () => {
  return (
    <Router>
      <div>
        {/* Navigation Links
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/cart">Cart</Link>
            </li>
          </ul>
        </nav> */}
        <Header />
        {/* Route Definitions */}
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
