import { LOAD_ACCOUNT } from '../types';

const initialState = {}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_ACCOUNT:
            return { ...state, ...action.payload }
        default: return state;
    }
}

export default reducer;