import React, { Component } from "react";
import axios from "axios";
import AxiosDetails from "./axios-details";

class UserAxios extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: [],
    };
  }

  UNSAFE_componentWillMount() {
    axios("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        let dataResponse = response.data;
        if (dataResponse != null) {
          this.setState({
            user: dataResponse,
          });
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    return (
      <>
        <h3>Get api bằng axios</h3>
        <div className="user-group">
          <div className="name">Họ tên</div>
          <div className="userName">Tài khoản</div>
          <div className="email">Email</div>
          <div className="phone">Phone</div>
        </div>
        <hr />
        {this.state.user.map((val, key) => (
          <AxiosDetails value={val} key={key} />
        ))}
      </>
    );
  }
}

export default UserAxios;
