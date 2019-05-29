import axios from 'axios';
import { SIGNIN, SIGNUP, LOGOUT, SIGNIN_ERROR, SIGNUP_ERROR } from '../types';
import { loadAccount } from './account';

export const signup = (user) => async dispatch => {
    try {
        const res = await axios.post('/api/user', user)
        dispatch({ type: SIGNUP, payload: res.data.data })
        dispatch(loadAccount())
    } catch (error) {
        dispatch({type: SIGNUP_ERROR, payload: error.response.data.error})
    }
}


export const signin = (cpf, password) => async dispatch => {
    try {
        const res = await axios.post('/api/user/login', { cpf, password })
        dispatch({ type: SIGNIN, payload: res.data.data })
        dispatch(loadAccount())
    } catch (error) {
        dispatch({type: SIGNIN_ERROR, payload: error.response.data.error})
    }
}

export const logout = () => async dispatch => {
    try {
        await axios.post('/api/user/logout')
        dispatch({ type: LOGOUT })
    }
    catch (error) {
        console.log(error.response)
    }
}