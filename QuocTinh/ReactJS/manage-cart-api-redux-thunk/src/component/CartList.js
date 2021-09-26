import React from 'react';
import { useSelector } from 'react-redux';
import CartProduct from './CartProduct';

const CartList = () => {
    let carts = useSelector(state => state.carts);
    let userlogined = useSelector(state => state.userlogined);
    return (
        <div>
            <h1 className="text-center m-3">Giỏ hàng</h1>
            <div className="container mt-5">
                <div className="row">
                    {carts.map((cart, index) => {
                        if (cart.id_user === userlogined.id)
                            return <CartProduct key={index} cart={cart} />
                    })}
                </div>
                <div className="row">
                    <button type="button" className="btn btn-success">MUA HÀNG</button>
                </div>
            </div>
        </div>
    );
}

export default CartList;
