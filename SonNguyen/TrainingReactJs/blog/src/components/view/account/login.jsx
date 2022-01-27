import React, { Component } from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
import { login } from "../../../redux/action/user";
import "../../css/login.css";
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      users: this.props.users,
      isLogin: this.props.isLogin,
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

  login = () => {
    let { username, password, users } = this.state;

    const checkUsername = users.some(
      (el) => el.username === username && el.password === password
    );

    if (checkUsername) {
      this.props.LOGIN(username);
      this.setState({
        username: "",
      });
      alert("Đăng nhập thành công");
    } else {
      alert("Tài khoản hoặc mật khẩu không đúng");
    }
  };

  UNSAFE_componentWillReceiveProps(nextProps) {
    this.setState({
      username: nextProps.username,
      isLogin: nextProps.isLogin,
    });
  }

  render() {
    let { username, password, isLogin } = this.state;

    if (isLogin) {
      return <Navigate to="/" />;
    }
    return (
      <div className="login container">
        <h3>Đăng nhập</h3>
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
          <button className="btn btn-primary" onClick={() => this.login()}>
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
    isLogin: state.account.isLogin,
  };
};
let mapDispatchToProps = (dispatch) => {
  return {
    LOGIN: (username) => dispatch(login(username)),
  };
};

export default connect(mapStateToprops, mapDispatchToProps)(Login);
