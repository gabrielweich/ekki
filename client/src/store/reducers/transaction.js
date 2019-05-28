import { LOAD_TRANSACTIONS } from '../types';

const initialState = {
    transactions: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_TRANSACTIONS:
            return { ...state, transactions: [...action.payload] }
        default: return state;
    }
}

export default reducer;