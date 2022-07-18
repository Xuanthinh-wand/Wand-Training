import {combineReducers} from 'redux';

import Todos from './todos';
import GroupFilters from './groupFilters';

const rootReducer = combineReducers({
    Todos,
    GroupFilters,
});

export default rootReducer;
