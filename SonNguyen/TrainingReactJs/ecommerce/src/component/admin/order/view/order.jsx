import React, { Component } from "react";
import { Link } from "react-router-dom";
import ListOrder from "./list-order";
import "../css/order.css";

class Order extends Component {
  render() {
    return (
      <>
        <div className="title">
          <Link to="/admin/products">Quay lại</Link>
        </div>
        <div className="order-admin">
          <h4>Danh sách đơn hàng</h4>
          <div className="order-details">
            <div className="name">Họ tên</div>
            <div className="address">Địa chỉ</div>
            <div className="qty">Số lượng</div>
            <div className="price">Tổng tiền</div>
            <div className="status">Trạng thái</div>
            <div className="details">Tùy chọn</div>
          </div>
          <ListOrder />
        </div>
      </>
    );
  }
}
export default Order;
