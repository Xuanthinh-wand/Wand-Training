import React, { Component } from "react";
import { connect } from "react-redux";
import "../../css/login.css";
import { register } from "../../../redux/action/user";
import { Navigate } from "react-router-dom";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      isRedirect: false,
      users: this.props.users,
    };
  }

  changeUsername = (e) => {
    this.setState({
      username: e.target.value,
    });
  };

  changePassword = (e) => {
    this.setState({
      password: e.target.value,
    });
  };

  register = () => {
    let { username, password, users } = this.state;

    const checkUsername = users.some((el) => el.username === username);

    if (checkUsername) {
      this.setState({
        username: "",
        password: "",
      });
      alert("Tài khoản đã tồn tại");
    } else {
      this.setState({
        username: "",
        password: "",
        isRedirect: true,
      });
      this.props.REGISTER(username, password);
      alert("Đăng ký thành công");
    }
  };

  UNSAFE_componentWillReceiveProps(nextProps) {
    this.setState({
      users: nextProps.users,
    });
  }

  render() {
    let { username, password, isRedirect } = this.state;
    if (isRedirect) {
      return <Navigate to="/login" />;
    }

    return (
      <div className="login container">
        <h3>Đăng ký</h3>
        <div className="form detail">
          <div className="text-field">
            <label htmlFor="username">Tài khoản</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={this.changeUsername}
            />
          </div>
          <div className="text-field">
            <label htmlFor="password">Mật khẩu</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={this.changePassword}
            />
          </div>
          <button className="btn btn-primary" onClick={() => this.register()}>
            Gửi{" "}
          </button>
        </div>
      </div>
    );
  }
}
let mapStateToprops = (state) => {
  return {
    users: state.account.users,
  };
};
let mapDispatchToProps = (dispatch) => {
  return {
    REGISTER: (username, password) => dispatch(register(username, password)),
  };
};

export default connect(mapStateToprops, mapDispatchToProps)(Register);
