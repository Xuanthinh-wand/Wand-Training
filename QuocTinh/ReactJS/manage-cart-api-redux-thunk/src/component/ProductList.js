import React from 'react';
import Product from './Product';
import { useSelector } from 'react-redux';

function ProductList() {
    let products = useSelector(state => state.products);
    return (
        <div>
            <h1 className="text-center m-3">Danh sách sản phẩm</h1>
            <div className="container">
                <div className="row">
                    {products.map((product, index) => {
                        return <Product key={index} product={product} />

                    })}
                </div>

            </div>
        </div>
    );
}
export default ProductList;
