import axios from "axios";
import { loadAccount } from './account';

import { LOAD_TRANSACTIONS, SAVE_TRANSACTION_START, SAVE_TRANSACTION_ERROR } from "../types";

export const loadTransactions = () => async dispatch => {
    try {
        const res = await axios.get('/api/transaction');
        dispatch({ type: LOAD_TRANSACTIONS, payload: res.data.data })
    }
    catch (error) {
        console.log(error)
    }
}

export const saveTransaction = (amount, contactId) => async dispatch => {
    try {
        dispatch({ type: SAVE_TRANSACTION_START })
        await axios.post('/api/transaction', { amount, contactId })
        dispatch(loadAccount())
        dispatch(loadTransactions())
    }
    catch (error) {
        dispatch({ type: SAVE_TRANSACTION_ERROR, payload: error.response.data.error })
    }
}


