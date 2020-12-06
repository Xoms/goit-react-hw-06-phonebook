//import {createStore, combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import phonebookReducer from './phonebook/phonebookReducer';

//без тулзов 
// const rootReducer = combineReducers({
//     contacts: phonebookReducer,
// })
//
// const store = createStore(rootReducer,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

// с тулзами 
const store = configureStore({
  reducer: {
    contacts: phonebookReducer,
  }
})

export default store;