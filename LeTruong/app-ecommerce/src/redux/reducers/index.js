import {combineReducers} from 'redux';
import Products from './products';
import Users from './users';
const rootReducer = combineReducers({
    Products,
    Users,
});
export default rootReducer;
