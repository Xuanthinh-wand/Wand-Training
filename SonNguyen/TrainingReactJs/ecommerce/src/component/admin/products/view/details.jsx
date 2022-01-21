import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../css/index.css";
class ProductsDetails extends Component {
  render() {
    let { name, price } = this.props.value;
    let num = this.props.id + 1;
    return (
      <>
        <div className="details">
          <div className="product-group">
            <div className="num">{num}</div>
            <div className="name">{name}</div>
            <div className="price">{price}</div>
            <div className="setting">
              <button onClick={this.props.handleEdit}>Sửa</button>
              <button onClick={this.props.handleDelete}>Xóa</button>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default ProductsDetails;
