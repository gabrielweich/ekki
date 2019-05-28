import { LOAD_CONTACTS, LOAD_CONTACT_USER, CLEAN_CONTACT_USER } from '../types';

const initialState = {
    contacts: [],
    userContact: {}
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_CONTACTS:
            return { ...state, contacts: [...action.payload] }
        case LOAD_CONTACT_USER:
            return { ...state, userContact: { ...action.payload } }
        case CLEAN_CONTACT_USER:
            return { ...state, userContact: {} }
        default: return state;
    }
}

export default reducer;