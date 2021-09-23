import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addCART } from '../redux/action/cartAction';

function Product({ product }) {
    let userlogined = useSelector(state => state.userlogined);
    const [name, setName] = useState(product.name);
    const [img, setImg] = useState(product.img);
    const [price, setPrice] = useState(product.price);
    let dispatch = useDispatch();
    const [id_product, setId_product] = useState(product.id);
    return (
        <div className="card ms-4 mb-4" style={{ width: '18rem' }}>
            <img src={img} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">{price}</p>
                <a href="#" className="btn btn-primary" onClick={() => {
                    dispatch(addCART({
                        id_user: userlogined.id, id_product: id_product, count: 1
                    }
                    ));
                    alert("Thêm vào giỏ hàng thành công!");
                }}
                >Thêm Giỏ hàng</a>
            </div>
        </div>
    );
}
export default Product;
