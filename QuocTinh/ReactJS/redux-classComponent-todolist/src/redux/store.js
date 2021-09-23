import todosReducer from './reducer/todosReducer';
import editStatusReducer from './reducer/editStatusReducer';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
var redux = require('redux');
const persistConfig = {
    key: 'root',
    storage,
};



const allReducers = redux.combineReducers({
    todos: todosReducer,
    editStatus: editStatusReducer
})
const pReducer = persistReducer(persistConfig, allReducers);
var store = redux.createStore(pReducer);
store.subscribe(() => {
    console.log(JSON.stringify(store.getState()));
})
export const persistor = persistStore(store);
export default store;

