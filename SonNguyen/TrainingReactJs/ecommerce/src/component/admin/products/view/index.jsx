import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {
  createProducts,
  removeProducts,
  updateProducts,
} from "../../../../redux/action/products";
import "../css/index.css";
import ProductsDetails from "./details";
class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: this.props.products,
      buttonInsert: true,
      totalQty: this.props.products.length,
      status: true,
    };
  }
  UNSAFE_componentWillReceiveProps(nextProps) {
    this.setState({
      products: nextProps.products,
      totalQty: nextProps.products.length,
    });
  }
  handleChangeName = (e) => {
    this.setState({
      name: e.target.value,
    });
  };
  handleChangePrice = (e) => {
    this.setState({
      price: e.target.value,
    });
  };
  handleChangeDetails = (e) => {
    this.setState({
      details: e.target.value,
    });
  };
  handleEdit = (val, key) => {
    let { name, price, details } = val;
    this.setState({
      buttonInsert: false,
      name,
      price,
      details,
      id: key,
    });
  };
  insert = () => {
    let { name, price, details } = this.state;
    this.props.ADD_PRODUCTS(name, price, details);
  };
  update = () => {
    let { id, name, price, details } = this.state;
    console.log(id, name, price, details);
    let a = this.props.UPDATE_PRODUCTS(id, name, price, details);
    console.log(a);
    this.setState({
      buttonInsert: true,
      name: "",
      price: "",
      details: "",
      idUpdate: "",
    });
  };
  destroy = () => {
    this.setState({
      buttonInsert: true,
      name: "",
      price: "",
      details: "",
      idUpdate: "",
    });
  };

  handleDelete = (e) => {
    this.props.REMOVE_PRODUCTS(e);
  };

  render() {
    let button;
    if (this.state.buttonInsert) {
      button = <button onClick={() => this.insert()}>Thêm mới</button>;
    } else {
      button = (
        <div>
          <button onClick={() => this.update()}>Cập nhật</button>
          <button onClick={() => this.destroy()}>Hủy</button>
        </div>
      );
    }
    return (
      <>
        <div className="admin-products">
          <div className="title">
            <h3>Danh sách sản phẩm ({this.state.totalQty} sản phẩm)</h3>
            <Link to="/admin/order">
              <button>Đơn hàng</button>
            </Link>
          </div>
          <div className="form-group">
            <label>Tên sản phẩm</label>
            <input
              type="text"
              value={this.state.name}
              onChange={(e) => this.handleChangeName(e)}
            />
            <label>Giá cả</label>
            <input
              type="number"
              value={this.state.price}
              onChange={(e) => this.handleChangePrice(e)}
            />
            <label>Chi tiết</label>
            <textarea
              type="text"
              rows="5"
              value={this.state.details}
              onChange={(e) => this.handleChangeDetails(e)}
            />
            {button}
          </div>
          <br />
          <div className="details">
            <div className="product-group">
              <div className="num">STT</div>
              <div className="name">Tên sản phẩm</div>
              <div className="price">Giá cả</div>
              <div className="setting">Tùy chọn</div>
            </div>
            {this.state.products.map((val, key) => (
              <ProductsDetails
                value={val}
                key={key}
                id={key}
                handleEdit={() => this.handleEdit(val, key)}
                handleDelete={() => this.handleDelete(key)}
              />
            ))}
          </div>
        </div>
      </>
    );
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    ADD_PRODUCTS: (name, price, details) =>
      dispatch(createProducts(name, price, details)),
    UPDATE_PRODUCTS: (id, name, price, details) =>
      dispatch(updateProducts(id, name, price, details)),
    REMOVE_PRODUCTS: (id) => dispatch(removeProducts(id)),
  };
};
let mapStateToProps = (state) => {
  return {
    products: state.products,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Products);
