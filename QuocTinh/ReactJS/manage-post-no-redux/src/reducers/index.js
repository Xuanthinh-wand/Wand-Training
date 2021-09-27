import { combineReducers } from 'redux'
import postReducer from './postReducer'

const appReducers = combineReducers({
    posts: postReducer
});
export default appReducers;