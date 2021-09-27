import { combineReducers } from 'redux'
import itemPostReducer from './itemPostReducer';
import postReducer from './postReducer'

const appReducers = combineReducers({
    posts: postReducer,
    itempost: itemPostReducer
});
export default appReducers;