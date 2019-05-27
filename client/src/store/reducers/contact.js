import { LOAD_CONTACTS } from '../types';

const initialState = []

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_CONTACTS:
            return [...state, ...action.payload]
        default: return state;
    }
}

export default reducer;