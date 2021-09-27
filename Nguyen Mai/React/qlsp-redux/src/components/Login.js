import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { loginUser, logoutUser } from '../actions/login';

const Login = () => {
    let userlogined = useSelector(state => state.userlogined);
    let dispatch = useDispatch();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    if (userlogined === null) {
        return (
            <form onSubmit={() => {
                dispatch(loginUser({
                    user_name: username, password: password
                }
                ));
            }}>
                <h1 className="text-center m-3">Đăng Nhập</h1>
                <div className="mb-3">
                    <input type="text" className="form-control" placeholder="Tên đăng nhập" value={username} onChange={(e) => setUsername(e.target.value)} />
                </div>
                <div className="mb-3">
                    <input type="password" className="form-control" placeholder="Password" value={password} onChange={(event) => setPassword(event.target.value)} />
                </div>
                <div>Name: mai, Pass: 111</div>
                <button type="submit" className="btn btn-primary">Đăng Nhập</button>
            </form>
        );
    } else {
        return (
            <div className="text-center">
                <h1 className="text-center m-3">Xin chào {userlogined.user_name}</h1>
                <Link className="btn btn-danger" type="submit" to="/login"
                onClick={() => { dispatch(logoutUser({}));}}>Đăng Xuất</Link>
            </div>
        )
    }
}

export default Login;