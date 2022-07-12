import React from 'react';
import {Link} from 'react-router-dom';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {loggout} from '../../redux/actions/users';
class Menu extends React.Component {
    render() {
        const {handleLoggout, isLoggin, cart, userLoggin} = this.props;
        const totalCart = cart.filter((cart) => cart.userId === userLoggin).length;
        return (
            <ul className='menu'>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/products'>Products</Link>
                </li>
                {isLoggin ? (
                    <>
                        <li>
                            <Link to='/carts'>Cart({totalCart})</Link>
                        </li>
                        <button className='btn' onClick={handleLoggout}>
                            Đăng xuất
                        </button>
                        <li>
                            <Link to='/admin'>Admin</Link>
                        </li>
                    </>
                ) : (
                    <>
                        <li>
                            <Link to='/login'>Đăng nhập</Link>
                        </li>
                        <li>
                            <Link to='/register'>Đăng ký</Link>
                        </li>
                    </>
                )}
            </ul>
        );
    }
}

function mapStateToProps(state) {
    return {
        isLoggin: state.users.isLoggin,
        userLoggin: state.users.userLoggin,
        cart: state.carts.listCart,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        handleLoggout: bindActionCreators(loggout, dispatch),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
