import React from 'react';
import './scss/from.scss';

export default class Login extends React.Component {
    render() {
        return (
            <div className='form'>
                <div className='container'>
                    <h2>Đăng nhập</h2>
                    <div className='form-login'>
                        <div className='group-item'>
                            <div className='label'>Tên đăng nhập</div>
                            <input type='text' />
                        </div>
                        <div className='group-item'>
                            <div className='label'>Mật khẩu</div>
                            <input type='text' />
                        </div>
                        <button className='btn btn-submit'>Đăng ký</button>
                    </div>
                </div>
            </div>
        );
    }
}
