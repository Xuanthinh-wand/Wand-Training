import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { loginUser } from '../redux/action/loginAction';
import { manageCart } from "../redux/states";

const Login = () => {
    let userlogined = useSelector(state => state.userlogined);
    let listUser = manageCart.users;
    let dispatch = useDispatch();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    if (userlogined === null) {
        return (
            <form className="container mt-5" onSubmit={() => {
                dispatch(loginUser({
                    user_name: username, password: password
                }
                ));
            }}>
                <h1 className="text-center m-3">Đăng Nhập</h1>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Tên đăng nhập</label>
                    <input type="text" className="form-control" value={username} onChange={(e) => setUsername(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Mật khẩu</label>
                    <input type="password" className="form-control" value={password} onChange={(event) => setPassword(event.target.value)} />
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" htmlFor="exampleCheck1">Ghi nhớ</label>
                </div>
                <button type="submit" className="btn btn-primary">Đăng Nhập</button>
            </form>
        );
    } else {
        return (
            <div className="text-center">
                <h1 className="text-center m-3">Xin chào {userlogined.full_name}</h1>
                <Link className="btn btn-primary me-1" to="/" type="submit">Mua Hàng</Link>
                <Link className="btn btn-success ms-1" to="/cart" type="submit">Giỏ Hàng</Link>
            </div>
        )
    }
}

export default Login;
