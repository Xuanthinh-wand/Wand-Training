import React, { Component } from "react";

import "../css/history.css";
import ListHistory from "./list-history";

class History extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="history">
        <h4>Danh sách đã mua</h4>
        <div className="history-details">
          <div className="name">Họ tên</div>
          <div className="address">Địa chỉ</div>
          <div className="qty">Số lượng</div>
          <div className="price">Giá cả</div>
          <div className="status">Trạng thái</div>
          <div className="details">Tùy chọn</div>
        </div>

        <ListHistory />
      </div>
    );
  }
}

export default History;
