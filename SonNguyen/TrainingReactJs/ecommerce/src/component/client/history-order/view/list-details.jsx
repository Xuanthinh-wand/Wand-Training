import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { destroy, settingOrder } from "../../../../redux/action/order";
import "../css/history.css";

class ListDetails extends Component {
  settingOrder = (val, key) => {
    let id = Number(key);
    let { name, address, phone, note, cart, status } = val;
    status = "Đã Hủy";
    let dataOrder = {
      name,
      address,
      phone,
      note,
      cart,
      status,
    };
    this.props.SETTING_ORDER(id, dataOrder);
  };
  render() {
    let pathname = window.location.pathname;
    let id = pathname.replace("/history-details/", "");
    let { cart } = this.props.order[id];
    let { products } = cart;
    return (
      <>
        <div className="history">
          {products.map((val, key) => (
            <div className="history-details" key={key}>
              <div className="name">{val.name}</div>
              <div className="address">{val.qty}</div>
              <div className="price">{val.price}</div>
              <div className="status">{val.qty * val.price}</div>
            </div>
          ))}
        </div>
        <h5>Ghi chú : {this.props.order[id].note}</h5>
        <button onClick={() => this.settingOrder(this.props.order[id], id)}>
          Hủy đơn hàng
        </button>
      </>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    order: state.order,
  };
};
let mapDispatchToProps = (dispatch) => {
  return {
    SETTING_ORDER: (id, dataOrder) => dispatch(settingOrder(id, dataOrder)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ListDetails);
