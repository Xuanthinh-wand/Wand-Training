import React, { Component } from "react";
import {
    BrowserRouter as Router,
    Route,
    Link
  } from "react-router-dom";
import './style.css';
import Products from './Products';
import Cart from './Cart';

class Nav extends Component{
    render(){
        return(
            <Router>
                <nav>
                    <ul>
                        <li>
                        <Link to="/products">Product</Link>
                        </li>
                        <li>
                        <Link to="/cart">Cart</Link>
                        </li>
                        
                    </ul>
                </nav>
                <Route path="/products">
                    <Products />
                </Route>
                <Route path="/cart">
                    <Cart />
                </Route>
                
            </Router>
        )
    }
}

export default Nav;