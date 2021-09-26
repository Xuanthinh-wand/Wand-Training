import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Narbar from './component/Narbar';
import ProductList from './component/ProductList';
import CartList from './component/CartList';
import Login from './component/Login';
import { Button, DatePicker, version } from "antd";
import "antd/dist/antd.css";
import PostList from './component/PostList';

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
          <Route path="/post">
            <PostList />
          </Route>
        </Switch>
        {/* <DatePicker />
        <Button type="primary" style={{ marginLeft: 8 }}>
          Primary Button
        </Button> */}
      </Router>
    </div>
  );
}
export default App;
