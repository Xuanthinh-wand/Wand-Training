import React from 'react';
import {bindActionCreators} from 'redux';
import {addCart} from '../../redux/actions/cart';
import {connect} from 'react-redux';
class ProductItem extends React.Component {
    render() {
        return (
            <div className='product-item'>
                <img src={this.props.product.imageUrl} alt={this.props.product.name} />
                <h3 className='name'>{this.props.product.name}</h3>
                <p className='desc'>{this.props.product.description}</p>
                {this.props.product.price && (
                    <p>
                        <strong>Giá: </strong> {this.props.product.price.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                    </p>
                )}

                <button
                    className='btn btn-addCart'
                    onClick={() => this.props.handleAddCart(this.props.userLoggin, this.props.product.id)}>
                    Add To Cart
                </button>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        userLoggin: state.users.userLoggin,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        handleAddCart: bindActionCreators(addCart, dispatch),
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductItem);
