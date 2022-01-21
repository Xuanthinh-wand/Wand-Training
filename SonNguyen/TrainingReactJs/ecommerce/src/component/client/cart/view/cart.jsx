import React, { Component } from "react";
import "../css/cart.css";
import CartDetails from "./details";

class Cart extends Component {
  render() {
    return (
      <div className="cart">
        <h4>Giỏ hàng</h4>
        <div className="details">
          <div className="name">Tên sản phẩm</div>
          <div className="qty">Số lượng</div>
          <div className="price">Giá cả</div>
          <div className="setting">Tùy chọn</div>
        </div>

        <CartDetails />
      </div>
    );
  }
}

export default Cart;
