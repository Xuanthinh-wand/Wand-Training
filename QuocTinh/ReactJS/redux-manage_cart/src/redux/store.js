import { createStore } from "redux";
import { cartReducer } from "./reducer/cartReducer";
import { loginReducer } from "./reducer/loginReducer";
import { productReducer } from "./reducer/productReducer";
import { persistStore, persistReducer } from 'redux-persist';
import { composeWithDevTools } from 'redux-devtools-extension';
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
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || redux.compose;
const pReducer = persistReducer(persistConfig, allReducers);
var store = redux.createStore(pReducer, composeEnhancers());
export const persistor = persistStore(store);

// const store = createStore(rootReducer, composeEnhancers());
export default store;
store.subscribe(() => {
    console.log(JSON.stringify(store.getState().carts));
});
store.subscribe(() => {
    console.log(JSON.stringify(store.getState().userlogined));
});