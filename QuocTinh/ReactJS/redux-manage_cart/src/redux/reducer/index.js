import { cartReducer } from "./cartReducer";
import { loginReducer } from "./loginReducer";
import { productReducer } from "./productReducer";
var redux = require('redux');
const allReducers = redux.combineReducers({
    products: productReducer,
    carts: cartReducer,
    userlogined: loginReducer
})
export default allReducers;