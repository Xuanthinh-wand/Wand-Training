import React, { Component } from "react";
import { connect } from "react-redux";
import "../../css/news-details.css";
import NewsComment from "./news-comment";

class NewsDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.match.params.id,
      posts: this.props.posts,
      isUsers: this.props.isUsers,
    };
  }

  render() {
    let { id, posts, isUsers } = this.state;
    let name;
    if (isUsers) {
      name = isUsers;
    } else {
      name = "Ẩn danh";
    }
    return (
      <div className="news-details container">
        <h3>{posts[id].title}</h3>
        <div className="header-content">
          <div className="user">Tác giả : {posts[id].created_users}</div>
          <div className="created_at">Ngày đăng : {posts[id].created_at}</div>
        </div>
        <div
          className="details"
          dangerouslySetInnerHTML={{ __html: posts[id].details }}
        ></div>
        <hr></hr>
        <br />
        <NewsComment id={id} name={name} />
      </div>
    );
  }
}
let mapStateToprops = (state) => {
  return {
    isUsers: state.account.isUsers,
    posts: state.post.posts,
  };
};
let mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToprops, mapDispatchToProps)(NewsDetails);
