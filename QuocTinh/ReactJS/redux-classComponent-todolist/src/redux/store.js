import todosReducer from './reducer/todosReducer';
import editStatusReducer from './reducer/editStatusReducer';
var redux = require('redux');
const allReducers = redux.combineReducers({
    todos: todosReducer,
    editStatus: editStatusReducer
})
var store = redux.createStore(allReducers);
store.subscribe(() => {
    console.log(JSON.stringify(store.getState()));
})
export default store;

