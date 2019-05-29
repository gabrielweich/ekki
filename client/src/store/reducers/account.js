import { LOAD_ACCOUNT } from '../types';

const initialState = {
    account: {}
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_ACCOUNT:
            return { ...state, account: {...action.payload} }
        default: return state;
    }
}

export default reducer;