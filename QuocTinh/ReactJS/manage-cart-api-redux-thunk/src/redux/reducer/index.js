import { cartReducer } from "./cartReducer";
import { loginReducer } from "./loginReducer";
import postReducer from "./postReducer";
// import postReducer from "./postReducer";
// import { postReducer } from "./postReducer";
import { productReducer } from "./productReducer";
var redux = require('redux');
const allReducers = redux.combineReducers({
    products: productReducer,
    carts: cartReducer,
    userlogined: loginReducer,
    posts: postReducer
})
// export default allReducers;

// import { combineReducers } from 'redux';
// import exampleReducer from './exampleReducer';

export default (state, action) => allReducers(state, action);