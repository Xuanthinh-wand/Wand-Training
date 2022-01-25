import React, { Component } from "react";

class UserDetails extends Component {
  render() {
    let { name, username, email, phone } = this.props.value;
    return (
      <div className="user-group">
        <div className="name">{name}</div>
        <div className="userName">{username}</div>
        <div className="email">{email}</div>
        <div className="phone">{phone}</div>
      </div>
    );
  }
}

export default UserDetails;
