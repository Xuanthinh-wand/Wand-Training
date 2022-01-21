import React, { Component } from "react";
class ShowList extends Component {
  render() {
    let { title, workDay, addTime } = this.props.value;
    return (
      <>
        <div className="todoGroup">
          <div className="title">{title}</div>
          <div className="workDay">{workDay}</div>
          <div className="workDay">{addTime}</div>
          <div className="setting">
            <button onClick={this.props.handleEdit}>Sửa</button>
            <button onClick={this.props.handleDelele}>Xóa</button>
          </div>
        </div>
      </>
    );
  }
}

export default ShowList;
