import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { deleteCART, updateCART } from '../redux/action/cartAction';

const CartProduct = ({ cart }) => {
    let dispatch = useDispatch();
    let products = useSelector(state => state.products);
    const [count, setCount] = useState(cart.count);
    function GetProduct(id_product) {
        let producted;
        // console.log(id_product)
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
                <div className="col-2">
                    <img src={product.img} className="card-img-top" style={{ width: '100px', height: '100px' }} alt="..." />
                </div>
                <div className="col-3 d-flex align-items-center"><h3>{product.name}</h3></div>
                <div className="col-2 d-flex justify-content-center align-items-center"><span>{product.price} VND</span></div>
                <div className="col-2 d-flex justify-content-center align-items-center">
                    <button type="button" className="btn btn-secondary" onClick={() => {
                        dispatch(updateCART({
                            id: cart.id,
                            count: count,
                            change: "down"
                        }
                        ));
                        if (count > 0)
                            setCount(count - 1);
                    }}
                    >-</button>
                    <span className="mx-3">{count}</span>
                    <button type="button" className="btn btn-secondary" onClick={() => {
                        dispatch(updateCART({
                            id: cart.id,
                            count: count,
                            change: "up"
                        }
                        ));
                        setCount(count + 1);
                    }}
                    >+</button>
                </div>
                <div className="col-3 d-flex justify-content-end align-items-center">
                    <span className="me-1">{cart.count * product.price}</span> VND
                    <button type="button" className="btn btn-danger ms-3" onClick={() => dispatch(deleteCART(cart.id))}>Xóa</button>
                </div>
            </div>
        </div >
    );
}

export default CartProduct;
