import {createStore} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import {composeWithDevTools} from 'redux-devtools-extension';
import Users from '../reducers/users';
import Propducts from '../reducers/products';
import Carts from '../reducers/cart';
import {combineReducers} from 'redux';

const composedEnhancers = composeWithDevTools();

const persistConfig = {
    key: 'products',
    storage,
    whitelist: ['products'],
};

const authPersistConfig = {
    key: 'users',
    storage: storage,
};
const cartPersistConfig = {
    key: 'carts',
    storage: storage,
};

const rootReducer = combineReducers({
    users: persistReducer(authPersistConfig, Users),
    carts: persistReducer(cartPersistConfig, Carts),
    products: Propducts,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
    let store = createStore(persistedReducer, composedEnhancers);
    let persistor = persistStore(store);
    return {store, persistor};
};
