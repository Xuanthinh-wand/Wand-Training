import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../css/order.css";
import AdminListDetails from "./list-details";
class AdminDetails extends Component {
  render() {
    return (
      <>
        <div className="title">
          <Link to="/admin/order">Quay lại</Link>
        </div>
        <div className="order-admin">
          <h4>Chi tiết đơn hàng</h4>
          <div className="order-detail">
            <div className="name">Tên sản phẩm</div>
            <div className="address">Số lượng</div>
            <div className="price">Giá cả</div>
            <div className="status">Thành tiền</div>
          </div>
          <AdminListDetails />
        </div>
      </>
    );
  }
}
export default AdminDetails;
