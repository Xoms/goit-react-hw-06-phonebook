//без тулзов
// import types from './actionTypes';

// const addContact = (contact={}) => ({
//     type: types.ADD_CONTACT,
//     payload: {
//         contact
//     }
// })

// const delContact = (id='') => ({
//     type: types.DEL_CONTACT,
//     payload: {
//         id
//     }
// })

// const actions = { addContact, delContact }
// export default actions

//с тулзами
import types from './actionTypes';
import { createAction } from '@reduxjs/toolkit';

const addContact = createAction(types.ADD_CONTACT);
const delContact = createAction(types.DEL_CONTACT);

const actions = { addContact, delContact }
export default actions