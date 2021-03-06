import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logoutUser } from '../redux/action/loginAction';

const ButtonLogin = () => {
    let userlogined = useSelector(state => state.userlogined);
    let dispatch = useDispatch();
    if (userlogined === null) {
        return (
            <div className="collapse navbar-collapse" id="navbarScroll">
                <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
                    <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="/">Danh sách Sản phẩm</Link>
                    </li>
                </ul>
                <Link className="btn btn-primary" to="/login" type="submit">Đăng Nhập</Link>
            </div>

        );
    } else {
        return (
            <div className="collapse navbar-collapse" id="navbarScroll">
                <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
                    <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="/">Danh sách Sản phẩm</Link>
                    </li>
                </ul>
                <Link className="btn btn-danger me-2" to="/cart"><i className="fas fa-shopping-cart"></i></Link>
                <Link className="btn btn-danger" type="submit" to="/" onClick={() => {
                    dispatch(logoutUser({
                    }
                    ));
                }}
                >Đăng Xuất</Link>
            </div>

        );
    }

}

export default ButtonLogin;
