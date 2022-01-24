import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";
import AdminDetails from "./component/admin/order/view/details";
import Order from "./component/admin/order/view/order";
import Products from "./component/admin/products/view";
import Cart from "./component/client/cart/view/cart";
import UserAxios from "./component/client/get-api-axios/view/user-axios";
import Details from "./component/client/history-order/view/details";
import History from "./component/client/history-order/view/history";
import Home from "./component/client/home/view/home";
import Menu from "./component/client/menu/view/menu";
import Payment from "./component/client/payment/view/payment";
import UserSave from "./component/client/user-save/view/userSave";
import User from "./component/client/user/view/user";
import Login from "./component/login/view/login";
import Register from "./component/login/view/register";

class App extends Component {
  render() {
    return (
      <div className="app-container">
        <Menu />
        <Routes>
          <Route path="/" element={<Home />} extra></Route>
          <Route path="/user" element={<User />}></Route>
          <Route path="/user-save" element={<UserSave />}></Route>
          <Route path="/user-axios" element={<UserAxios />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/payment" element={<Payment />}></Route>
          <Route path="/history" element={<History />}></Route>
          <Route path="/history-details/:id" element={<Details />}></Route>
          {/* Admin */}
          <Route path="/admin/products" element={<Products />}></Route>
          <Route path="/admin/order" element={<Order />}></Route>
          <Route
            path="/admin/order-details/:id"
            element={<AdminDetails />}
          ></Route>
        </Routes>
      </div>
    );
  }
}
export default App;
