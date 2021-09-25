import React, { Component } from 'react';
import { connect } from 'react-redux';
import Product from './Product';
import { actAddToCart } from './../actions/index';

class Products extends Component {
    render() {
        const { products } = this.props;
        const { onAddToCart } = this.props;
        return (
            <section className="section">
                <div className="row">
                    { products.map((product, index) => {
                        return <Product 
                            key={index} 
                            product={product}
                            onAddToCart = {onAddToCart} 
                        />
                    })}
                </div>
            </section>
        );
    }

}

const mapStateToProps = state => {
    return {
        products : state.products
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onAddToCart: (product) => {
            dispatch(actAddToCart(product, 1));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Products);
