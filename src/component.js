import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Product from "./product";
import Navbar from "./Navbar";

const Component = () => {
  return (
    <BrowserRouter>
      <div className="Navmain">
        <div className="main">
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/product" element={<Product />}></Route>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default Component;
