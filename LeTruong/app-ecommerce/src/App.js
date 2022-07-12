import './App.scss';
import React from 'react';
import Header from './components/client/header';
import {Routes, Route, Navigate} from 'react-router-dom';
import Home from './pages/client/home';
import Products from './pages/client/products';
import ProductAdmin from './pages/admin/productAdmin';
import * as ProductActions from './redux/actions/products';
import * as UserActions from './redux/actions/users';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Login from './pages/client/login';
import Register from './pages/client/register';
import Cart from './pages/client/cart';
class App extends React.Component {
    render() {
        const {products, actions, userActions, isLoggin} = this.props;
        return (
            <div className='App'>
                <Header />
                <main>
                    <Routes>
                        <Route element={!isLoggin ? <Navigate to='/login' replace /> : undefined}>
                            <Route path='/' element={<Home />} />
                            <Route path='/products' element={<Products products={products} />} />
                            <Route path='/carts' element={<Cart products={products} />} />
                        </Route>
                        <Route path='/admin' element={<ProductAdmin products={products} actions={actions} />} />
                        <Route path='/login' element={<Login isLoggin={isLoggin} handleLogin={userActions.loggin} />} />
                        <Route path='/register' element={<Register addUser={userActions.addUser} />} />
                    </Routes>
                </main>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        products: state.products.items,
        isLoggin: state.users.isLoggin,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(ProductActions, dispatch),
        userActions: bindActionCreators(UserActions, dispatch),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
