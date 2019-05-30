import { LOAD_TRANSACTIONS, SAVE_TRANSACTION_ERROR, SAVE_TRANSACTION_START } from '../types';

const initialState = {
    transactions: [],
    transactionError: null
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_TRANSACTIONS:
            return { ...state, transactions: [...action.payload] }
        case SAVE_TRANSACTION_ERROR:
            return { ...state, transactionError: action.payload }
        case SAVE_TRANSACTION_START:
            return { ...state, transactionError: null }
        default: return state;
    }
}

export default reducer;