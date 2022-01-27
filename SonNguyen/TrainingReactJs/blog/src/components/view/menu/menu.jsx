import React, { Component } from "react";
import { Dropdown } from "react-bootstrap";
import { connect } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { logout } from "../../../redux/action/user";
import "../../css/menu.css";
class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isUsers: this.props.isUsers,
    };
  }
  logout = () => {
    this.props.LOGOUT();
  };
  UNSAFE_componentWillReceiveProps(nextProps) {
    this.setState({
      isUsers: nextProps.isUsers,
      isLogin: nextProps.isLogin,
    });
  }
  render() {
    let { isUsers } = this.state;
    let elementButton, writeContent;
    if (isUsers) {
      elementButton = (
        <li>
          <Dropdown>
            <Dropdown.Toggle
              variant="info"
              id="dropdown-basic"
              className="isUsers"
            >
              {isUsers}
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item onClick={() => this.logout()}>
                Đăng xuất
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </li>
      );
      writeContent = (
        <li>
          <NavLink to="/write-content" className="list-group-item">
            Viết bài
          </NavLink>
        </li>
      );
    } else {
      elementButton = (
        <>
          {" "}
          <li>
            <Link to="/login">
              <button className="btn btn-info">Đăng nhập</button>
            </Link>
          </li>
          <li>
            <Link to="/register">
              <button className="btn btn-info">Đăng ký</button>
            </Link>
          </li>
        </>
      );
    }
    return (
      <div className="menu container">
        <ul>
          <li>
            <NavLink to="/" className="">
              <img
                src="https://docs.google.com/uc?id=1LWe6eb50m67fwYtVbqAuUKckAmUdSi8w"
                alt="logo"
              />
            </NavLink>
          </li>
          <li>
            <NavLink to="/" className="list-group-item">
              Trang chủ
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className="list-group-item">
              Giới thiệu
            </NavLink>
          </li>
          {writeContent}
        </ul>
        <ul>{elementButton}</ul>
      </div>
    );
  }
}
let mapStateToprops = (state) => {
  return {
    isUsers: state.account.isUsers,
  };
};
let mapDispatchToProps = (dispatch) => {
  return {
    LOGOUT: () => dispatch(logout()),
  };
};

export default connect(mapStateToprops, mapDispatchToProps)(Menu);
