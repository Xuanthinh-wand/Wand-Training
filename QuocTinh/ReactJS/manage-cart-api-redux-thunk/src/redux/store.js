import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import allReducers from "./reducer/index";
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk';
import { applyMiddleware, createStore } from 'redux';
var redux = require('redux');

// const middleware = { thunk }
// const nqtMiddleware = store => next => action => {
//     console.log('Action', action, store.getState());
//     return next(action);
// }
const middleware = [thunk];
if (process.env.NODE_ENV !== 'production') {
    middleware.push(createLogger());
}
const persistConfig = {
    key: 'root',
    storage
};
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || redux.compose;
const pReducer = persistReducer(persistConfig, allReducers);
var store = redux.createStore(pReducer, applyMiddleware(...middleware));

export default store;
export const persistor = persistStore(store);
// store.subscribe(() => {
//     console.log(JSON.stringify(store.getState().carts));
// });
// store.subscribe(() => {
//     console.log(JSON.stringify(store.getState().userlogined));
// });