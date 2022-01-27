import React, { Component } from "react";
import { connect } from "react-redux";
import { send } from "../../../redux/action/contact";
import "../../css/contact.css";
class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      content: "",
    };
  }

  changeName = (e) => {
    this.setState({
      name: e.target.value,
    });
  };

  changeEmail = (e) => {
    this.setState({
      email: e.target.value,
    });
  };

  changeContent = (e) => {
    this.setState({
      content: e.target.value,
    });
  };
  sendContact = () => {
    let { name, email, content } = this.state;
    if (name && email && content) {
      this.props.SEND_CONTACT(name, email, content);
      alert("Thành công");
      this.setState({
        name: "",
        email: "",
        content: "",
      });
    } else {
      alert("Vui lòng nhập nội dung");
    }
  };
  render() {
    let { name, email, content } = this.state;
    return (
      <div className="contact container">
        <h3>Liên hệ</h3>
        <div className="content">
          <div className="image detail">
            <img
              src="https://vidiashop.net/wp-content/uploads/2017/10/giphy-13.gif"
              alt="logo"
            />
          </div>

          <div className="form detail">
            <div className="text-field">
              <label htmlFor="username3">Họ tên</label>
              <input
                type="text"
                id="username3"
                placeholder="Nhập họ tên..."
                value={name}
                onChange={this.changeName}
              />
            </div>

            <div className="text-field">
              <label htmlFor="username3">Email</label>
              <input
                type="email"
                id="username3"
                placeholder="Nhập email..."
                value={email}
                onChange={this.changeEmail}
              />
            </div>

            <div className="text-field">
              <label htmlFor="username3">Nội dung</label>
              <textarea
                type="text"
                id="username3"
                placeholder="Nhập nội dung..."
                rows={6}
                value={content}
                onChange={this.changeContent}
              />
            </div>
            <button
              className="btn btn-primary"
              onClick={() => this.sendContact()}
            >
              Gửi{" "}
            </button>
          </div>
        </div>
      </div>
    );
  }
}
let mapStateToprops = (state) => {
  return {
    contact: state.contact,
  };
};
let mapDispatchToProps = (dispatch) => {
  return {
    SEND_CONTACT: (name, email, content) =>
      dispatch(send(name, email, content)),
  };
};
export default connect(mapStateToprops, mapDispatchToProps)(Contact);
