import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import allReducers from "./reducer/index";
var redux = require('redux');

const persistConfig = {
    key: 'root',
    storage
};
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || redux.compose;
const pReducer = persistReducer(persistConfig, allReducers);
var store = redux.createStore(pReducer, composeEnhancers());
export const persistor = persistStore(store);
export default store;
store.subscribe(() => {
    console.log(JSON.stringify(store.getState().carts));
});
store.subscribe(() => {
    console.log(JSON.stringify(store.getState().userlogined));
});