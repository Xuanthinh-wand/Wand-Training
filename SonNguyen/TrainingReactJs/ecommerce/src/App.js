import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";
import Products from "./component/admin/products/view";
import Cart from "./component/client/cart/view/cart";
import Home from "./component/client/home/view/home";
import Menu from "./component/client/menu/view/menu";
import Login from "./component/login/view/login";
import Register from "./component/login/view/register";

class App extends Component {
  render() {
    return (
      <div className="app-container">
        <Menu />
        <Routes>
          <Route path="/" element={<Home />} extra></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          {/* Admin */}
          <Route path="/admin/products" element={<Products />}></Route>
        </Routes>
      </div>
    );
  }
}
export default App;
