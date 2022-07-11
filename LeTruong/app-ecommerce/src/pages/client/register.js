import React from 'react';
import './scss/from.scss';

export default class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            password: '',
        };
    }

    handleChangeName = (name) => {
        this.setState(() => ({
            name,
        }));
    };
    handleChangePassword = (password) => {
        this.setState(() => ({
            password,
        }));
    };

    handleAddUser = () => {
        this.props.addUser(this.state.name, this.state.password);
        this.setState(() => ({
            name: '',
            password: '',
        }));
    };
    render() {
        return (
            <div className='form'>
                <div className='container'>
                    <h2>Đăng ký</h2>
                    <div className='form-login'>
                        <div className='group-item'>
                            <div className='label'>Tên đăng nhập</div>
                            <input
                                onChange={(e) => this.handleChangeName(e.target.value)}
                                value={this.state.name}
                                type='text'
                            />
                        </div>
                        <div className='group-item'>
                            <div className='label'>Mật khẩu</div>
                            <input
                                onChange={(e) => this.handleChangePassword(e.target.value)}
                                value={this.state.password}
                                type='text'
                            />
                        </div>
                        <button className='btn btn-submit' onClick={this.handleAddUser}>
                            Đăng ký
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}
