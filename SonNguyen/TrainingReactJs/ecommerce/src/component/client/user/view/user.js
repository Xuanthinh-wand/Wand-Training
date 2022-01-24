import React, { Component } from "react";
import UserDetails from "./user-details";
import "../css/user.css";
class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: [],
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          user: json,
        });
      });
  }
  render() {
    return (
      <div className="App">
        <h1> Get API Giả lập </h1>
        <div className="user-group">
          <div className="name">Họ tên</div>
          <div className="userName">Tài khoản</div>
          <div className="email">Email</div>
          <div className="phone">Phone</div>
        </div>
        <hr />
        {this.state.user.map((item, key) => (
          <UserDetails value={item} key={key} />
        ))}
      </div>
    );
  }
}
export default User;
