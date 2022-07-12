import React from 'react';
import './scss/cart.scss';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {editCart} from '../../redux/actions/cart';
import {deleteCart} from '../../redux/actions/cart';
class Cart extends React.Component {
    render() {
        const {carts, handleEditCart, handleDeleteCart, products, userLoggin} = this.props;
        const cartRender = carts.filter((item) => item.userId === userLoggin);
        return (
            <div className='cart'>
                <div className='container'>
                    <h2>Giỏ hàng</h2>
                    <div className='cart-list'>
                        {cartRender.length > 0 ? (
                            <>
                                <table>
                                    <tbody>
                                        <tr>
                                            <td style={{width: '50%'}}>Sản phẩm</td>
                                            <td style={{width: '15%'}}>Giá</td>
                                            <td style={{width: '10%'}}>Số lượng</td>
                                            <td style={{width: '15%'}}>Tổng tiền</td>
                                            <td></td>
                                        </tr>
                                        {cartRender.map((cart) => {
                                            const product = products.find((product) => product.id === cart.productId);
                                            let totalPrice = parseFloat(product.price) * parseFloat(cart.quantity);
                                            return (
                                                <tr key={cart.id}>
                                                    <td>{product.name}</td>
                                                    <td className='price'>
                                                        {product.price.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                                                    </td>
                                                    <td>
                                                        <input
                                                            type='number'
                                                            onChange={(e) => handleEditCart(cart.id, e.target.value)}
                                                            value={cart.quantity}></input>
                                                    </td>
                                                    <td>
                                                        {totalPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                                                    </td>
                                                    <td>
                                                        <button
                                                            className='btn btn-delete'
                                                            onClick={() => handleDeleteCart(cart.id)}>
                                                            Xoá
                                                        </button>
                                                    </td>
                                                </tr>
                                            );
                                        })}
                                    </tbody>
                                </table>

                                <div className='right'>
                                    <h3>
                                        <strong>Tổng tiền tất cả SP: </strong>
                                        {cartRender
                                            .reduce((total, item) => {
                                                const product = products.find(
                                                    (product) => product.id === item.productId,
                                                );
                                                return total + parseFloat(product.price) * parseFloat(item.quantity);
                                            }, 0)
                                            .toString()
                                            .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                                    </h3>
                                </div>
                            </>
                        ) : (
                            <div>Giỏ hàng trống</div>
                        )}
                    </div>
                </div>
            </div>
        );
    }
}
function mapStateToProps(state) {
    return {
        carts: state.carts.listCart,
        userLoggin: state.users.userLoggin,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        handleEditCart: bindActionCreators(editCart, dispatch),
        handleDeleteCart: bindActionCreators(deleteCart, dispatch),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
