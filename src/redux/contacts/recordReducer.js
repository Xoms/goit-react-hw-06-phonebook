import types from './actionTypes';

const initVal = JSON.parse(localStorage.getItem('contacts')) || [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'}
  ];

const recordReducer = (state = initVal, {type, payload} ) => {
    switch(type) {
        case types.ADD_CONTACT:
            return [...state, payload.contact]

        case types.DEL_CONTACT: 
            return state.filter( ({id}) => id!==payload.id )
        default: 
            return state;        
    }
}

export default recordReducer