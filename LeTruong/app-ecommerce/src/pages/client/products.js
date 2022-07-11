import React from 'react';
import ProductItem from '../../components/client/productItem';
import './scss/product.scss';
export default class Products extends React.Component {
    render() {
        const products = this.props.products;
        return (
            <section className='products'>
                <div className='container'>
                    <h2>Products</h2>
                    <div className='product-list'>
                        {products.length > 0 ? (
                            products.map((product) => <ProductItem key={product.id} product={product} />)
                        ) : (
                            <div>Chưa có sản phẩm</div>
                        )}
                    </div>
                </div>
            </section>
        );
    }
}
