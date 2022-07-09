import React from 'react';
import Menu from './menu';

export default class Header extends React.Component {
    render() {
        return (
            <header className='header'>
                <div className='container d-flex flex-between'>
                    <div className='logo'>Ecommerce app</div>
                    <Menu />
                </div>
            </header>
        );
    }
}
