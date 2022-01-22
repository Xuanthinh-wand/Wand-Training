import React, { Component } from "react";
import { connect } from "react-redux";
import { settingOrder } from "../../../../redux/action/order";

class AdminListDetails extends Component {
  settingOrder = (val, key) => {
    let id = Number(key);
    let { name, address, phone, note, cart, status } = val;
    status = "Đã xác nhận";
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
    let id = pathname.replace("/admin/order-details/", "");
    let { cart } = this.props.order[id];
    let { products } = cart;
    return (
      <>
        {products.map((val, key) => (
          <div className="order-detail" key={key}>
            <div className="name">{val.name}</div>
            <div className="address">{val.qty}</div>
            <div className="price">{val.price} vnđ</div>
            <div className="status">{val.qty * val.price} vnđ</div>
          </div>
        ))}

        <h5>Ghi chú : {this.props.order[id].note}</h5>
        <button onClick={() => this.settingOrder(this.props.order[id], id)}>
          Xác nhận đơn hàng
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
export default connect(mapStateToProps, mapDispatchToProps)(AdminListDetails);
