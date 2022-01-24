import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { logOut } from "../../../../redux/action/user";
import "../css/menu.css";

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: this.props.cart,
    };
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
          <NavLink to="/login">
            <button className="btn btn-login">Đăng nhập</button>
          </NavLink>
          <NavLink to="/register">
            <button className="btn btn-register">Đăng ký</button>
          </NavLink>
        </li>
      );
    }

    if (this.props.cart) {
      number = this.props.cart.totalQty;
    }
    return (
      <div className="menu">
        <ul className="left">
          <NavLink to={"/"} className="list-group-item">
            <li>Trang chủ</li>
          </NavLink>
        </ul>
        <ul className="right">
          <NavLink to={"/user-axios-redux"} className="list-group-item">
            <li>User Axios Redux </li>
          </NavLink>
          <NavLink to={"/user-axios"} className="list-group-item">
            <li>User Axios </li>
          </NavLink>
          <NavLink to={"/user-save"} className="list-group-item">
            <li> User - Redux </li>
          </NavLink>
          <NavLink to={"/user"} className="list-group-item">
            <li>User - State </li>
          </NavLink>
          <NavLink to={"/cart"} className="list-group-item">
            <li>
              Giỏ hàng <sup>{number}</sup>{" "}
            </li>
          </NavLink>
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
