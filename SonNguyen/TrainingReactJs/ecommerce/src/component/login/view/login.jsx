import React, { Component } from "react";
import { connect } from "react-redux";
import { Link, Navigate, Redirect } from "react-router-dom";
import { getUser } from "../../../redux/action/user";
import "../css/login.css";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false,
    };
  }

  handleChangeName = (e) => {
    this.setState({
      name: e.target.value,
    });
  };
  handleChangePassWord = (e) => {
    this.setState({
      password: e.target.value,
    });
  };

  handleLogin = () => {
    let { name, password } = this.state;
    let users = this.props.users;
    const CheckName = users.some((el) => el.name === name);
    if (name) {
      if (CheckName) {
        this.props.GET_USER(name);
        alert("Đăng Nhập thành công");
        this.setState({
          redirect: true,
        });
      } else {
        alert("Tài khoản hoặc mật khẩu không chính xác");
      }
    }
  };

  render() {
    const { redirect } = this.state;

    if (redirect) {
      return <Navigate to="/" />;
    }
    return (
      <>
        <div className="form-login">
          <div className="input-group">
            <label>Họ tên</label>
            <input
              type="text"
              plancehoder="Nhập họ tên"
              onChange={this.handleChangeName}
            />
          </div>
          <div className="input-group">
            <label>Mật khẩu</label>
            <input type="password" onChange={this.handleChangePassWord} />
          </div>
          <button onClick={() => this.handleLogin()}>Đăng nhập</button>
        </div>
      </>
    );
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    GET_USER: (name) => dispatch(getUser(name)),
  };
};
let mapStateToProps = (state) => {
  return {
    users: state.users,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
