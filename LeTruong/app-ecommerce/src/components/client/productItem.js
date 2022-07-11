import React from 'react';

export default class ProductItem extends React.Component {
    render() {
        return (
            <div className='product-item'>
                <img src={this.props.product.imageUrl} alt={this.props.product.name} />
                <h3 className='name'>{this.props.product.name}</h3>
                <p className='desc'>{this.props.product.description}</p>
                <button className='btn btn-addCart'>Add To Cart</button>
            </div>
        );
    }
}
