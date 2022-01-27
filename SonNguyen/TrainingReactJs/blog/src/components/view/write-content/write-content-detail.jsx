import React, { Component } from "react";
import "../../css/write-content.css";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { connect } from "react-redux";
import { insert } from "../../../redux/action/write-content";
class WriteContentDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      details: "",
    };
  }

  changeTitle = (e) => {
    this.setState({
      title: e.target.value,
    });
  };

  createPost = () => {
    let date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let created_at = day + "/" + month + "/" + year;
    let created_users = this.props.isUsers;
    let { title, details } = this.state;
    if (title) {
      this.props.WRITE_CONTENT(title, details, created_at, created_users);
      alert("Thành công");
      this.setState({
        title: "",
        details: "",
      });
    } else {
      alert("VUi lòng nhập tiêu đề");
    }
  };

  render() {
    let { title, details } = this.state;
    return (
      <>
        <div className="text-field">
          <label htmlFor="title">Tiêu đề</label>
          <input
            type="text"
            id="title"
            placeholder="Nhập tiêu đề"
            value={title}
            onChange={this.changeTitle}
          />
        </div>
        <div className="text-field">
          <CKEditor
            editor={ClassicEditor}
            id="ckeditor-content"
            data={details}
            onChange={(event, editor) => {
              const details = editor.getData();
              this.setState({
                details,
              });
            }}
          />
        </div>
        <button className="btn btn-danger" onClick={() => this.createPost()}>
          {" "}
          Gửi
        </button>
      </>
    );
  }
}

let mapStateToprops = (state) => {
  return {
    isUsers: state.account.isUsers,
  };
};
let mapDispatchToProps = (dispatch) => {
  return {
    WRITE_CONTENT: (title, details, created_at, users) =>
      dispatch(insert(title, details, created_at, users)),
  };
};

export default connect(mapStateToprops, mapDispatchToProps)(WriteContentDetail);
