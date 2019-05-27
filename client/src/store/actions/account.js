import axios from 'axios';
import { LOAD_ACCOUNT } from '../types';

export const loadAccount = () => async dispatch => {
    const res = await axios.get('/api/account')
    dispatch({ type: LOAD_ACCOUNT, payload: res.data.data })
}