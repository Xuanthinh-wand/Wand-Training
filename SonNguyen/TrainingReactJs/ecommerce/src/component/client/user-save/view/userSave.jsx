import React, { Component } from "react";
import { connect } from "react-redux";
import fetchUser from "../../../../redux/action/user-save";
import "../../user/css/user.css";

class UserSave extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fetchUser: this.props.fetchUser,
    };
  }

  UNSAFE_componentWillMount() {
    this.props.FETCH_USER();
  }
  render() {
    if (this.state.fetchUser) {
      return (
        <>
          <div className="user-group">
            <div className="name">Họ tên</div>
            <div className="userName">Tài khoản</div>
            <div className="email">Email</div>
            <div className="phone">Phone</div>
          </div>
          {this.state.fetchUser.map((val, key) => (
            <div className="user-group" key={key}>
              <div className="name">{val.name}</div>
              <div className="userName">{val.username}</div>
              <div className="email">{val.email}</div>
              <div className="phone">{val.phone}</div>
            </div>
          ))}
        </>
      );
    } else {
      return (
        <>
          <h4>Danh sách trống</h4>
        </>
      );
    }
  }
}
let mapDispatchToProps = (dispatch) => {
  return {
    FETCH_USER: () =>
      fetch("https://jsonplaceholder.typicode.com/users")
        .then((res) => res.json())
        .then((res) => {
          dispatch(fetchUser(res));
        })
        .catch((error) => {
          console.log(error);
        }),
  };
};
let mapStateToProps = (state) => {
  return {
    fetchUser: state.fetchUser,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(UserSave);
