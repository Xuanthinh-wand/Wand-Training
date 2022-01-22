import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../css/history.css";
import ListDetails from "./list-details";

class Details extends Component {
  render() {
    return (
      <div className="history">
        <Link to="/history">Quay lại</Link>
        <h4>Chi tiết mua hàng</h4>
        <div className="history-details">
          <div className="name">Tên sản phẩm</div>
          <div className="address">Số lượng</div>
          <div className="price">Giá cả</div>
          <div className="status">Thành tiền</div>
        </div>
        <ListDetails />
      </div>
    );
  }
}

export default Details;
