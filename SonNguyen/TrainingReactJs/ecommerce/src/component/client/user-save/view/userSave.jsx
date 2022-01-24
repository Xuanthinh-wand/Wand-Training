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

  async UNSAFE_componentWillMount() {
    await this.props.FETCH_USER();
  }
  render() {
    if (this.state.fetchUser) {
      return (
        <>
          <h3>Get API - fetch - redux</h3>
          <div className="user-group">
            <div className="name">Họ tên</div>
            <div className="userName">Tài khoản</div>
            <div className="email">Email</div>
            <div className="phone">Phone</div>
          </div>
          <hr />
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
