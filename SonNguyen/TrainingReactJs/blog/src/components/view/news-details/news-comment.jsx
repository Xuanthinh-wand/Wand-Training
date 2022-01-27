import React, { Component } from "react";
import { Button } from "react-bootstrap";
import { connect } from "react-redux";
import { post, remove } from "../../../redux/action/comment";

class NewsComment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: "",
      id: this.props.id,
      name: this.props.name,
      comment: this.props.comment,
    };
  }
  changeContent = (e) => {
    this.setState({
      content: e.target.value,
    });
  };
  postComment = () => {
    let { id, name, content } = this.state;
    if (content) {
      this.props.POST_COMMENT(id, name, content);
      this.setState({
        content: "",
      });
    }
  };

  remove = (id) => {
    this.props.REMOVE_COMMENT(id);
    this.setState({
      content: "",
    });
  };

  UNSAFE_componentWillReceiveProps(nextProps) {
    this.setState({
      isUsers: nextProps.isUsers,
      comment: nextProps.comment,
    });
  }
  render() {
    let { id, content, name, comment } = this.state;
    let listComment;
    listComment = comment.filter(function (item) {
      return item.id === id;
    });

    return (
      <div className="news-comment">
        <h5>Bình luận</h5>
        {listComment.map((val, key) => (
          <div className="content" key={key}>
            <i> {val.name}</i>
            <div className="content-comment">
              <p> {val.content}</p>
              <button
                className="btn btn-danger"
                onClick={() => this.remove(key)}
              >
                Xóa
              </button>
            </div>
            <hr />
          </div>
        ))}

        <div className="info-comment">
          <label>{name}</label>
          <textarea
            type="text"
            rows="5"
            value={content}
            onChange={this.changeContent}
          />
        </div>
        <button className="btn btn-primary" onClick={() => this.postComment()}>
          Gửi
        </button>
        <hr></hr>
      </div>
    );
  }
}
let mapStateToprops = (state) => {
  return {
    comment: state.comment.comment,
  };
};
let mapDispatchToProps = (dispatch) => {
  return {
    POST_COMMENT: (id, name, content) => dispatch(post(id, name, content)),
    REMOVE_COMMENT: (id) => dispatch(remove(id)),
  };
};

export default connect(mapStateToprops, mapDispatchToProps)(NewsComment);
