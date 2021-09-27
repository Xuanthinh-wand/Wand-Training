import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk';
import appReducers from '../reducers';
var redux = require('redux');

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || redux.compose;
const store = createStore(
    appReducers,
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(thunk)
);
export default store;