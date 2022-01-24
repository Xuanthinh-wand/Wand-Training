import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "../css/cart.css";
import CartDetails from "./details";

class Cart extends Component {
  render() {
    let button;
    if (this.props.accountLogin) {
      button = (
        <Link to="/history" className="link-history">
          <button>Lịch sử mua hàng</button>
        </Link>
      );
    }
    if (this.props.cart) {
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
          {button}
        </div>
      );
    } else {
      return (
        <div className="cart">
          {" "}
          {button}
          <h3>Giỏ hàng trống</h3>{" "}
        </div>
      );
    }
  }
}

let mapStateToProps = (state) => {
  return {
    cart: state.listCart.cart,
    accountLogin: state.accountLogin,
  };
};
export default connect(mapStateToProps, null)(Cart);
