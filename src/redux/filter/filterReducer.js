import types from './actionTypes';

const filterReducer = (state = '', {type, payload} ) => {
    switch(type) {
        case types.FILTER_CHANGE:
            return payload.value;

        default: 
            return state;        
    }
}

export default filterReducer; 