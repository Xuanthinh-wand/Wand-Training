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
import ModalAddProduct from './component/ModalAddProduct';

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
        {/* <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Thêm Giỏ Hàng</button>
        <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Thông báo</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
              </div>
              <ModalAddProduct />
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div> */}
      </Router>
    </div>
  );
}
export default App;
