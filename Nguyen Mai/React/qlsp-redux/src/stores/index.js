import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import todoProduct from '../reducers/index';
import items from '../reducers/news';
import todoLogin from '../reducers/login';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';

const persistConfig = {
    key: 'root',
    storage: storage
   };
const ShopApp = combineReducers({
    _todoProduct:todoProduct,
    items,
    userlogined: todoLogin
});
const pReducer = persistReducer(persistConfig, ShopApp);
const store =  createStore(pReducer,applyMiddleware(thunkMiddleware));

export default store;
export const persistor = persistStore(store);
