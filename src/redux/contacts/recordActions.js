import types from './actionTypes';

const addContact = (contact={}) => ({
    type: types.ADD_CONTACT,
    payload: {
        contact
    }
})

const delContact = (id='') => ({
    type: types.DEL_CONTACT,
    payload: {
        id
    }
})

const actions = { addContact, delContact }
export default actions