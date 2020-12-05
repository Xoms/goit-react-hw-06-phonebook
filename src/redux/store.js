import {createStore, combineReducers } from 'redux';
import recordReducer from './contacts/recordReducer';
import filterReducer from './filter/filterReducer';


const appReducer = combineReducers( {
  filter: filterReducer,
  items: recordReducer,
})

const rootReducer = combineReducers({
    contacts: appReducer
})

const store = createStore(rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store;