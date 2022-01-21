import React, { Component } from "react";
import { connect } from "react-redux";
import { Link, Navigate, Redirect } from "react-router-dom";
import { createUser, removeUser, updateUser } from "../../../redux/action/user";
import "../css/login.css";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      role: 0,
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

  handleRegister = () => {
    let { name, password, role } = this.state;
    let { users } = this.props;
    const newAccount = users.some((el) => el.name === this.state.name);
    if (name) {
      if (!newAccount) {
        this.props.ADD_USER(name, password, role);
        alert("Đăng ký thành công");
        this.setState({
          redirect: true,
        });
      } else {
        alert("User name đã tồn tại");
      }
    } else {
      this.setState({
        err: "err",
      });
    }
  };

  render() {
    const { redirect } = this.state;

    if (redirect) {
      return <Navigate to="/login" />;
    }
    return (
      <>
        <div className="form-register">
          <div className="input-group">
            <label>Họ tên</label>
            <input
              className={this.state.err}
              type="text"
              plancehoder="Nhập họ tên"
              onChange={this.handleChangeName}
            />
          </div>
          <div className="input-group">
            <label>Mật khẩu</label>
            <input type="password" onChange={this.handleChangePassWord} />
          </div>
          <button onClick={() => this.handleRegister()}>Đăng ký</button>
        </div>
      </>
    );
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    ADD_USER: (name, password, role) =>
      dispatch(createUser(name, password, role)),
  };
};
let mapStateToProps = (state) => {
  return {
    users: state.users,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);
