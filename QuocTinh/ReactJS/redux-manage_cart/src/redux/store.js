import { createStore } from "redux";
import { cartReducer } from "./reducer/cartReducer";
import { loginReducer } from "./reducer/loginReducer";
import { productReducer } from "./reducer/productReducer";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
var redux = require('redux');


const allReducers = redux.combineReducers({
    products: productReducer,
    carts: cartReducer,
    userlogined: loginReducer
})
const persistConfig = {
    key: 'root',
    storage,
    // whitelist: ['userlogined']
};
const pReducer = persistReducer(persistConfig, allReducers);
var store = redux.createStore(pReducer);
export const persistor = persistStore(store);
export default store;
store.subscribe(() => {
    console.log(JSON.stringify(store.getState().carts));
});
store.subscribe(() => {
    console.log(JSON.stringify(store.getState().userlogined));
});