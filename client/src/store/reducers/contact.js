import { LOAD_CONTACTS, LOAD_CONTACT_USER, CLEAN_CONTACT_USER, SAVE_CONTACT_ERROR } from '../types';

const initialState = {
    contacts: [],
    userContact: {},
    saveContactError: null
}

const reducer = (state = initialState, action) => {
    console.log(action.type)
    switch (action.type) {
        case LOAD_CONTACTS:
            return { ...state, contacts: [...action.payload] }
        case LOAD_CONTACT_USER:
            return { ...state, userContact: { ...action.payload }, loadContactUserError: null }
        case CLEAN_CONTACT_USER:
            return { ...state, userContact: {}, loadContactUserError: null }
        case SAVE_CONTACT_ERROR:
            return { ...state, saveContactError: action.payload }

        default: return state;
    }
}

export default reducer;