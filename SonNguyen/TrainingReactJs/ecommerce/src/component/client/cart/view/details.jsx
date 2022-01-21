import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { removeCart } from "../../../../redux/action/cart";
import "../css/cart.css";

class CartDetails extends Component {
  handleRemoveCart = (id) => {
    console.log(id);
    this.props.REMOVE_CART(id);
  };
  render() {
    if (this.props.cart) {
      let { products, totalQty, totalPrice } = this.props.cart;
      return (
        <>
          {products.map((val, key) => (
            <>
              <div className="details" key={key}>
                <div className="name">{val.name}</div>
                <div className="qty">
                  <input type="number" value={val.qty} />
                  <button>Sửa</button>
                </div>
                <div className="price">{val.price}</div>
                <div className="setting">
                  <button onClick={() => this.handleRemoveCart(key)}>
                    Xóa
                  </button>
                </div>
              </div>
              <hr />
            </>
          ))}
          <div className="total-cart">
            <p>Số lượng : {totalQty}</p>
            <p>Tổng tiền : {totalPrice} vnđ</p>
          </div>
          <div className="button-cart">
            <Link to="/">
              <button className="payment">Tiếp tục mua hàng</button>
            </Link>
            <button className="payment">Thanh toán</button>
          </div>
        </>
      );
    } else {
      return <>Giở hàng trống</>;
    }
  }
}
let mapDispatchToProps = (dispatch) => {
  return {
    REMOVE_CART: (id) => dispatch(removeCart(id)),
  };
};
let mapStateToProps = (state) => {
  return {
    cart: state.cart,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(CartDetails);
