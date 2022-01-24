import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
import AxiosReduxDetails from "./axios-redux-details";
import { axiosUser } from "../../../../redux/action/user-save";
class AxiosRedux extends Component {
  constructor(props) {
    super(props);
    this.state = {
      axiosUser: this.props.axiosUser,
    };
  }
  UNSAFE_componentWillMount() {
    this.props.AXIOS_USER();
  }
  UNSAFE_componentWillReceiveProps(nextProps) {
    this.setState({
      axiosUser: nextProps.axiosUser,
    });
  }
  render() {
    if (this.state.axiosUser) {
      return (
        <>
          <h3>Get api bằng axios - redux</h3>
          <div className="user-group">
            <div className="name">Họ tên</div>
            <div className="userName">Tài khoản</div>
            <div className="email">Email</div>
            <div className="phone">Phone</div>
          </div>
          <hr />
          {this.state.axiosUser.map((val, key) => (
            <AxiosReduxDetails value={val} key={key} />
          ))}
        </>
      );
    } else {
      return <>Đang tải tài liệu</>;
    }
  }
}
let mapDispatchToProps = (dispatch) => {
  return {
    AXIOS_USER: () =>
      axios("https://jsonplaceholder.typicode.com/users")
        .then((response) => {
          let dataResponse = response.data;
          if (dataResponse != null) {
            dispatch(axiosUser(dataResponse));
          }
        })
        .catch(function (error) {
          console.log(error);
        }),
  };
};
let mapStateToProps = (state) => {
  return {
    axiosUser: state.getApiUser.axiosUser,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(AxiosRedux);
