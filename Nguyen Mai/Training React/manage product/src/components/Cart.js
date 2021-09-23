import React, { Component } from 'react';
import { connect } from 'react-redux';
import CartItem from './CartItem';
import { actDeleteProductInCart, actUpdateProductInCart } from './../actions/index';

class Cart extends Component {
    render() {
        const { cart } = this.props;
        const { onDeleteProductInCart, onUpdateProductInCart } = this.props;
        return (
            <section className="section">
                <table className="table product-table">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Sản Phẩm</th>
                            <th>Số Lượng</th>
                            <th>Tổng Cộng</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        { cart.map((item, index) => {
                                return (
                                    <CartItem
                                        key={index}
                                        item={item}
                                        index={index}
                                        onDeleteProductInCart={onDeleteProductInCart}
                                        onUpdateProductInCart={onUpdateProductInCart}
                                    />
                                );
                            })
                        }
                    </tbody>
                </table>
            </section>
        );
    }
}

const mapStateToProps = state => {
    return {
        cart: state.cart
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onDeleteProductInCart: (product) => {
            dispatch(actDeleteProductInCart(product));
        },
        onUpdateProductInCart: (product, quantity) => {
            dispatch(actUpdateProductInCart(product, quantity));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);