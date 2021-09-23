import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Narbar from './component/Narbar';
import ProductList from './component/ProductList';
import CartList from './component/CartList';
import Login from './component/Login';

function App() {
  return (
    <div>
      <Router>
        <Narbar />
        <Switch>
          <Route exact path="/">
            <ProductList />
          </Route>
          <Route path="/cart">
            <CartList />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
export default App;
