import { combineReducers } from 'redux';
import recordReducer from './contacts/recordReducer';
import filterReducer from './filter/filterReducer';

export default combineReducers({
        items: recordReducer,
        filter: filterReducer
    })