import axios from 'axios';
import { SIGNIN, SIGNUP, LOGOUT } from '../types';
import { loadAccount } from './account';

export const signup = (user) => async dispatch => {
    try {
        const res = await axios.post('/api/user', user)
        dispatch({ type: SIGNUP, payload: res.data.data })
        dispatch(loadAccount())
    } catch (error) {
        console.log(error)
    }
}


export const signin = (cpf, password) => async dispatch => {
    try {
        const res = await axios.post('/api/user/login', { cpf, password })
        dispatch({ type: SIGNIN, payload: res.data.data })
        dispatch(loadAccount())
    } catch (error) {
        console.log(error)
    }
}

export const logout = () => async dispatch => {
    try {
        await axios.post('/api/user/logout')
        dispatch({ type: LOGOUT })
    }
    catch (error) {
        console.log(error)
    }
}