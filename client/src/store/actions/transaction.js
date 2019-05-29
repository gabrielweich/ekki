import axios from "axios";
import { loadAccount } from './account';

import { LOAD_TRANSACTIONS } from "../types";

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
        await axios.post('/api/transaction', { amount, contactId })
        dispatch(loadAccount())
        dispatch(loadTransactions())
    }
    catch (error) {
        console.log(error)
    }
}


