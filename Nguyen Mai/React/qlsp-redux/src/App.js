import React from 'react';
import {BrowserRouter as Router,Link, Route,Switch} from 'react-router-dom'
import Cart from './components/Cart';
import Header from './components/Header';
import Product from './components/Product';
import News from './components/News';
import Login from './components/Login';
function App() {
  return (
     <Router>
        <div className="container">
            <Header />
            <Switch>
               <Route path="/" exact component={Product} />
               <Route path="/carts" exact component={Cart} />
               <Route path="/news" exact component={News} />
               <Route path="/login" exact component={Login} />
            </Switch>
        </div>
     </Router>
  );
}
 
export default App;
