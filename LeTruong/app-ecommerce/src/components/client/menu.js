import React from 'react';
import {Link} from 'react-router-dom';

export default class Menu extends React.Component {
    render() {
        return (
            <ul className='menu'>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/products'>Products</Link>
                </li>
                <li>
                    <Link to='/carts'>Cart(0)</Link>
                </li>
                <li>
                    <Link to='/login'>Đăng nhập</Link>
                </li>
                <li>
                    <Link to='/register'>Đăng ký</Link>
                </li>
            </ul>
        );
    }
}
