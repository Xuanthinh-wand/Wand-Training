import React from 'react';
import { Link } from 'react-router-dom';
import ButtonLogin from './ButtonLogin';

const Narbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">QUẢN LÝ GIỎ HÀNG</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <ButtonLogin />
            </div>
        </nav >
    );
}
export default Narbar;
