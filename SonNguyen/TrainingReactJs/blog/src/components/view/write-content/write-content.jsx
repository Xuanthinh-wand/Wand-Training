import React, { Component } from "react";
import "../../css/news.css";
import WriteContentDetail from "./write-content-detail";
class WriteContent extends Component {
  render() {
    return (
      <div className="write-content container">
        <h3>Viết bài đăng</h3>
        <WriteContentDetail />
      </div>
    );
  }
}
export default WriteContent;
