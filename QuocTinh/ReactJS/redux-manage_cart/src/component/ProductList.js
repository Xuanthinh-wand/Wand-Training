import React from 'react';
import Product from './Product';
import { useSelector } from 'react-redux';

function ProductList() {
    let products = useSelector(state => state.products);
    // let carts = useSelector(state => state.carts);
    return (
        <div>
            <h1 className="text-center m-3">Danh sách sản phẩm</h1>
            <div className="container">
                <div className="row">
                    {products.map((product, index) => {
                        return <Product key={index} product={product} />

                    })}
                    {/* {carts.map((cart, index) => {
                        return <div className="col-4 mt-3">
                            <Product key={index} cart={cart} />
                        </div>
                    })} */}
                </div>

            </div>
        </div>
    );
}
export default ProductList;
