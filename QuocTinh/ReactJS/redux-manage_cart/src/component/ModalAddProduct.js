import React from 'react';
import { useSelector } from 'react-redux';
import CartMini from './CartMini';
import Login from './Login';

const ModalAddProduct = () => {
    let carts = useSelector(state => state.carts);
    let userlogined = useSelector(state => state.userlogined);
    if (userlogined === null) {
        return (
            <div>
                <h3 className="text-center text-danger m-3">Bạn cần đăng nhập!</h3>
                {/* <Login /> */}
            </div>
        )
    } else {
        return (
            <div>
                <h3 className="text-center text-success m-3">Thêm vào giỏ hàng thành công!</h3>
                <div className="container mt-5">
                    <div className="row">
                        {carts.map((cart, index) => {
                            if (cart.id_user === userlogined.id)
                                return <CartMini key={index} cart={cart} />
                        })}
                    </div>

                </div>
            </div>
        );
    }

}

export default ModalAddProduct;
