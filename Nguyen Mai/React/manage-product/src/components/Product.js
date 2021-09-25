import React, { Component } from 'react';
import './style.css';

class Product extends Component {
    render() {
        const { product } = this.props;
        return (
            <div className="col-sm-4">
                <div className="card text-center card-cascade narrower">
                    <div className="view overlay hm-white-slight z-depth-1">
                        <img src={ product.image }
                            className="img-fluid" />
                        
                    </div>
                    <div className="card-body">
                        <h4 className="card-title">
                            <strong>
                                <a>{ product.name }</a>
                            </strong>
                        </h4>
                        <div className="card-footer">
                            <button 
                                className="btn" 
                                onClick={ () => this.onAddToCart(product) }
                            >
                                Add to Cart
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    onAddToCart = (product) => {
        this.props.onAddToCart(product);
    }

}

export default Product;
