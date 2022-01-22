import React, { Component } from "react";
import { connect } from "react-redux";
import { Link, Navigate } from "react-router-dom";
import { removeAllCart } from "../../../../redux/action/cart";
import { order } from "../../../../redux/action/order";
import "../css/payment.css";

class Payment extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      name: "",
      address: "",
      phone: "",
      note: "",
      redirect: false,
    };
  }

  handleChangeName = (e) => {
    this.setState({
      name: e.target.value,
    });
  };
  handleChangeAddress = (e) => {
    this.setState({
      address: e.target.value,
    });
  };
  handleChangePhone = (e) => {
    this.setState({
      phone: e.target.value,
    });
  };
  handleChangeNote = (e) => {
    this.setState({
      note: e.target.value,
    });
  };

  order = () => {
    let { name, address, phone, note } = this.state;
    if (name && address && phone) {
      let cart = this.props.cart;
      let status = "Đang chờ xác nhận";
      this.props.ORDER(name, address, phone, note, cart, status);
      this.props.REMOVE_ALL_CART();
      this.setState({
        redirect: true,
      });
      alert("Đặt hàng thành công");
    } else {
      alert("Vui lòng điền các trường cần thiết");
    }
  };

  render() {
    const { redirect } = this.state;

    if (redirect) {
      return <Navigate to="/" />;
    }
    return (
      <div className="payment">
        <Link to="/cart">
          <span> Giỏ hàng</span>
        </Link>
        <h3>Thanh toán giỏ hàng</h3>
        <div className="form-payment">
          <div className="form-group">
            <label>Họ tên (*)</label>
            <input
              type="text"
              value={this.state.name}
              onChange={this.handleChangeName}
            />
          </div>
          <div className="form-group">
            <label>Địa chỉ (*)</label>
            <input
              type="text"
              value={this.state.address}
              onChange={this.handleChangeAddress}
            />
          </div>
          <div className="form-group">
            <label>SĐT (*)</label>
            <input
              type="text"
              value={this.state.phone}
              onChange={this.handleChangePhone}
            />
          </div>
          <div className="form-group">
            <label>Ghi chú</label>
            <textarea
              type="text"
              rows={5}
              value={this.state.note}
              onChange={this.handleChangeNote}
            />
          </div>
          <div className="form-group">
            <button onClick={() => this.order()}>Đặt hàng</button>
          </div>
        </div>
      </div>
    );
  }
}
let mapDispatchToProps = (dispatch) => {
  return {
    ORDER: (name, address, phone, note, cart, status) =>
      dispatch(order(name, address, phone, note, cart, status)),
    REMOVE_ALL_CART: () => dispatch(removeAllCart()),
  };
};
let mapStateToProps = (state) => {
  return {
    cart: state.cart,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Payment);
