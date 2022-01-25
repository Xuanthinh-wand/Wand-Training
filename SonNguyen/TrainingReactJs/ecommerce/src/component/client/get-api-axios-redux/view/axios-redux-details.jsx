import React, { Component, Fragment } from "react";

class AxiosReduxDetails extends Component {
  render() {
    let { name, username, email, phone } = this.props.value;
    return (
      <Fragment>
        <div className="user-group">
          <div className="name">{name}</div>
          <div className="userName">{username}</div>
          <div className="email">{email}</div>
          <div className="phone">{phone}</div>
        </div>
      </Fragment>
    );
  }
}

export default AxiosReduxDetails;
