import './App.scss';
import React from 'react';
import Header from './components/client/header';
import {Routes, Route} from 'react-router-dom';
import Home from './pages/client/home';
import Products from './pages/client/products';
import ProductAdmin from './pages/admin/productAdmin';
import * as ProductActions from './actions/products';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
class App extends React.Component {
    render() {
        const {products, actions} = this.props;
        return (
            <div className='App'>
                <Header />
                <main>
                    <Routes>
                        <Route exact path='/' element={<Home />} />
                        <Route path='/products' element={<Products />} />
                        <Route path='/admin' element={<ProductAdmin products={products} actions={actions} />} />
                    </Routes>
                </main>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        products: state.Products.productItems,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(ProductActions, dispatch),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
