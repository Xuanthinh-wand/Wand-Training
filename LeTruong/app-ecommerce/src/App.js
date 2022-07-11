import './App.scss';
import React from 'react';
import Header from './components/client/header';
import {Routes, Route} from 'react-router-dom';
import Home from './pages/client/home';
import Products from './pages/client/products';
import ProductAdmin from './pages/admin/productAdmin';
import * as ProductActions from './redux/actions/products';
import * as UserActions from './redux/actions/users';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Login from './pages/client/login';
import Register from './pages/client/register';
class App extends React.Component {
    render() {
        const {products, actions, userActions} = this.props;
        console.log('🚀 ~ file: App.js ~ line 17 ~ App ~ render ~ products', products);
        return (
            <div className='App'>
                <Header />
                <main>
                    <Routes>
                        <Route exact path='/' element={<Home />} />
                        <Route path='/products' element={<Products products={products} />} />
                        <Route path='/admin' element={<ProductAdmin products={products} actions={actions} />} />
                        <Route path='/carts' element={<Home />} />
                        <Route path='/login' element={<Login />} />
                        <Route path='/register' element={<Register addUser={userActions.addUser} />} />
                    </Routes>
                </main>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        products: state.Products.items,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(ProductActions, dispatch),
        userActions: bindActionCreators(UserActions, dispatch),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
