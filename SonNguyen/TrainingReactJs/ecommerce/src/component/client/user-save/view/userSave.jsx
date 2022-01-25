import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchUser } from "../../../../redux/action/user-save";
import "../../user/css/user.css";

class UserSave extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fetchUser: this.props.fetchUser,
    };
  }

  componentDidMount() {
    this.props.FETCH_USER();
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    this.setState({
      fetchUser: nextProps.fetchUser,
    });
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
    } else {
      return <>Đang tải dữ liệu</>;
    }
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    FETCH_USER: () => dispatch(fetchUser()),
  };
};

let mapStateToProps = (state) => {
  return {
    fetchUser: state.getApiUser.fetchUser,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserSave);
