import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { removeCart, updateCart } from "../../../../redux/action/cart";
import "../css/cart.css";

class CartDetails extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      cart: this.props.cart,
      qty: [],
    };
  }

  handleRemoveCart = (id) => {
    this.props.REMOVE_CART(id);
  };
  handleChangeQty = (val, key, e) => {
    let { products, totalQty, totalPrice } = this.state.cart;
  };
  handleUpdateCart = (key) => {
    console.log();
  };
  UNSAFE_componentWillReceiveProps(nextProps) {
    this.setState({
      cart: nextProps.cart,
    });
  }
  render() {
    let { products, totalQty, totalPrice } = this.state.cart;
    let path;
    if (this.props.accountLogin) {
      path = "/payment";
    } else {
      path = "/login";
    }
    return (
      <>
        {products.map((val, key) => (
          <div className="details" key={key}>
            <div className="name">{val.name}</div>
            <div className="qty">
              <input
                type="number"
                placeholder={val.qty}
                onChange={(e) => this.handleChangeQty(val, key, e)}
              />
              <button onClick={(e) => this.handleUpdateCart(e)}>Sửa</button>
            </div>
            <div className="price">{val.price}</div>
            <div className="setting">
              <button onClick={() => this.handleRemoveCart(key)}>Xóa</button>
            </div>
          </div>
        ))}
        <hr />
        <div className="total-cart">
          <p>Số lượng : {totalQty}</p>
          <p>Tổng tiền : {totalPrice} vnđ</p>
        </div>
        <div className="button-cart">
          <Link to="/">
            <button className="payment">Tiếp tục mua hàng</button>
          </Link>
          <Link to={path}>
            <button className="payment">Thanh toán</button>
          </Link>
        </div>
      </>
    );
  }
}
let mapDispatchToProps = (dispatch) => {
  return {
    UPDATE_CART: (products, totalQty, totalPrice) =>
      dispatch(updateCart(products, totalQty, totalPrice)),
    REMOVE_CART: (id) => dispatch(removeCart(id)),
  };
};
let mapStateToProps = (state) => {
  return {
    cart: state.cart,
    accountLogin: state.accountLogin,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(CartDetails);
