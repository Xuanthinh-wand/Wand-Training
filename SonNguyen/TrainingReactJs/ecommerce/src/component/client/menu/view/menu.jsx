import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { logOut } from "../../../../redux/action/user";
import "../css/menu.css";

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: this.props.cart,
    };
  }
  UNSAFE_componentWillReceiveProps(nextProps) {
    console.log(nextProps);
  }
  handleLogOut = () => {
    this.props.LOGOUT();
  };
  render() {
    let account = this.props.accountLogin;
    let number;
    let button;
    if (account) {
      button = (
        <li className="button-login">
          {account.name}
          <ul>
            <li>
              <button onClick={() => this.handleLogOut()}>Đăng xuất</button>
            </li>
          </ul>
        </li>
      );
    } else {
      button = (
        <li className="button-login">
          <Link to="/login">
            <button className="btn btn-login">Đăng nhập</button>
          </Link>
          <Link to="/register">
            <button className="btn btn-register">Đăng ký</button>
          </Link>
        </li>
      );
    }

    if (this.props.cart) {
      number = this.props.cart.totalQty;
    }
    return (
      <div className="menu">
        <ul className="left">
          <Link to={"/"}>
            <li>Trang chủ</li>
          </Link>
        </ul>
        <ul className="right">
          <Link to={"/user-save"}>
            <li>List User </li>
          </Link>
          <Link to={"/user"}>
            <li>User </li>
          </Link>
          <Link to={"/cart"}>
            <li>
              Giỏ hàng <sup>{number}</sup>{" "}
            </li>
          </Link>
          {button}
        </ul>
      </div>
    );
  }
}
let mapDispatchToProps = (dispatch) => {
  return {
    LOGOUT: () => dispatch(logOut()),
  };
};
let mapStateToProps = (state) => {
  return {
    accountLogin: state.accountLogin,
    cart: state.listCart.cart,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
