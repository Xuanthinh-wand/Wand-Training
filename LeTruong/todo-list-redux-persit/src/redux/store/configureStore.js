import {createStore} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import {composeWithDevTools} from 'redux-devtools-extension';
import rootReducer from '../reducers';

const composedEnhancers = composeWithDevTools();

const persistConfig = {
    key: 'root',
    storage,
    whitelist: 'Todos',
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
    let store = createStore(persistedReducer, composedEnhancers);
    let persistor = persistStore(store);
    return {store, persistor};
};
