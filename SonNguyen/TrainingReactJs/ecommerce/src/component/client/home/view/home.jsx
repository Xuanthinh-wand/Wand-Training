import React, { Component } from "react";
import { connect } from "react-redux";
import { addCart } from "../../../../redux/action/cart";
import "../css/home.css";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      qty: 1,
      cart: this.props.cart,
    };
  }

  handleChangQty = (e) => {
    this.setState({
      qty: e.target.value,
    });
  };
  addToCart = (val, key) => {
    let cart = this.props.cart;
    let { name, price } = val;
    if (!cart) {
      let qty = this.state.qty;
      let products = [
        {
          name,
          price,
          qty,
        },
      ];
      let totalQty = qty;
      let totalPrice = price;

      this.props.ADD_CART(products, totalQty, totalPrice);
    } else {
      let { products } = cart;
      let qty = 1;
      let newProducts = {
        name,
        price,
        qty,
      };
      const checkCart = cart.products.some(
        (el) => el.name === newProducts.name
      );
      let totalQty = cart.totalQty;
      let totalPrice = cart.totalPrice;

      if (!checkCart) {
        products = [...products, newProducts];
        totalQty += qty;
        totalPrice += price;
        this.props.ADD_CART(products, totalQty, totalPrice);
      } else {
        let len = products.length;
        for (let i = 0; i < len; i++) {
          if (products[i].name === newProducts.name) {
            let { name, price, qty } = products[i];
            qty += newProducts.qty;
            let newUpdate = {
              name,
              price,
              qty,
            };
            products.splice(i, 1, newUpdate);
          }
        }

        products = [...products];

        totalQty += qty;
        totalPrice += price;
        this.props.ADD_CART(products, totalQty, totalPrice);
      }
    }
  };
  render() {
    return (
      <>
        <div className="group-login"></div>
        <div className="list">
          <h3>Danh sách sản phẩm</h3>
          <div className="list-products">
            {this.props.products.map((val, key) => (
              <div className="list-details" key={key}>
                <h4>{val.name}</h4>
                <p>{val.details}</p>
                <p>Giá : {val.price} vnđ</p>
                <button onClick={() => this.addToCart(val, key)}>
                  Add to cart
                </button>
              </div>
            ))}
          </div>
        </div>
      </>
    );
  }
}
let mapDispatchToProps = (dispatch) => {
  return {
    ADD_CART: (products, totalQty, totalPrice) =>
      dispatch(addCart(products, totalQty, totalPrice)),
  };
};
let mapStateToProps = (state) => {
  return {
    cart: state.listCart.cart,
    products: state.products,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
