import rootReducer from './Reducer';
import {createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';

const composedEnhancers = composeWithDevTools();
let store = createStore(rootReducer, composedEnhancers);
export default store;
