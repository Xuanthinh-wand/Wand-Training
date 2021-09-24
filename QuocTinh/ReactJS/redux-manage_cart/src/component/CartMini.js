import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { deleteCART, updateCART } from '../redux/action/cartAction';

const CartMini = ({ cart }) => {
    let dispatch = useDispatch();
    let products = useSelector(state => state.products);
    const [count, setCount] = useState(cart.count);
    function GetProduct(id_product) {
        let producted;
        for (let item of products) {
            if (item.id === id_product) {
                producted = item;
            }
        }
        return producted;
    }
    let product = GetProduct(cart.id_product);
    return (

        <div className="container mb-3" >
            <div className="row">
                <div className="col-4">
                    <img src={product.img} className="card-img-top" style={{ width: '100px', height: '100px' }} alt="..." />
                </div>
                <div className="col-4 d-flex align-items-center"><h3>{product.name}</h3></div>
                <div className="col-4 d-flex justify-content-center align-items-center"><span>{product.price} VND</span></div>

            </div>
        </div >
    );
}

export default CartMini;
