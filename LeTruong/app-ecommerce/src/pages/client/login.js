import React from 'react';
import './scss/from.scss';
import {Navigate} from 'react-router-dom';

export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            password: '',
            message: '',
        };
    }

    changeName = (name) => {
        this.setState(() => ({name}));
    };

    changePassword = (password) => {
        this.setState(() => ({password}));
    };

    handSubmit = () => {
        if (this.state.name === '') {
            this.setState(() => ({message: 'Vui lòng nhập tên đăng nhập'}));
            return;
        }
        if (this.state.password === '') {
            this.setState(() => ({message: 'Vui lòng nhập mật khẩu'}));
            return;
        }
        this.props.handleLogin(this.state.name, this.state.password);
        let isLoggin = this.props.isLoggin;
        if (!isLoggin) {
            this.setState(() => ({message: 'Tên tài khoản hoặc mật khẩu không chính xác'}));
        }
    };
    render() {
        if (this.props.isLoggin) {
            return <Navigate to='/' replace />;
        }
        return (
            <div className='form'>
                <div className='container'>
                    <h2>Đăng nhập</h2>
                    <div className='form-login'>
                        <div className='message'>{this.state.message}</div>
                        <div className='group-item'>
                            <div className='label'>Tên đăng nhập</div>
                            <input type='text' onChange={(e) => this.changeName(e.target.value)} />
                        </div>
                        <div className='group-item'>
                            <div className='label'>Mật khẩu</div>
                            <input type='text' onChange={(e) => this.changePassword(e.target.value)} />
                        </div>
                        <button className='btn btn-submit' onClick={this.handSubmit}>
                            Đăng nhập
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}
