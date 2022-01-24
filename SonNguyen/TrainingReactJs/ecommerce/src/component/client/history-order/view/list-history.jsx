import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { destroy, destroyOrder } from "../../../../redux/action/order";
import "../css/history.css";

class ListHistory extends Component {
  render() {
    console.log(this.props.order);
    return (
      <>
        {this.props.order.map((val, key) => (
          <div className="history-details">
            <div className="name">{val.name}</div>
            <div className="address">{val.address}</div>
            <div className="qty">{val.cart.totalQty}</div>
            <div className="price">{val.cart.totalPrice} vnđ</div>
            <div className="status">{val.status}</div>
            <div className="details">
              <Link to={"/history-details/" + key}>Xem chi tiêt</Link>
            </div>
          </div>
        ))}
      </>
    );
  }
}
let mapDispatchToProps = (dispatch) => {
  return {};
};
let mapStateToProps = (state) => {
  return {
    order: state.order,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ListHistory);
