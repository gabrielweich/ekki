import axios from 'axios';

import { LOAD_CONTACTS, LOAD_CONTACT_USER, CLEAN_CONTACT_USER, SAVE_CONTACT_ERROR, LOAD_CONTACT_USER_ERROR } from '../types';

export const loadContacts = () => async dispatch => {
    try {
        const res = await axios.get('/api/contact')
        dispatch({ type: LOAD_CONTACTS, payload: res.data.data })
    }
    catch (error) {
        console.log(error)
    }
}

export const cleanContactUser = () => ({
    type: CLEAN_CONTACT_USER
})

export const loadUser = (cpf) => async dispatch => {
    try {
        dispatch(cleanContactUser())
        const res = await axios.get(`/api/user/${cpf}`)
        dispatch({ type: LOAD_CONTACT_USER, payload: res.data.data })
    }
    catch (error) {
        dispatch({ type: LOAD_CONTACT_USER_ERROR, payload: error.response.data.error })
    }
}

export const saveContact = (contactId) => async dispatch => {
    try {
        const res = await axios.post('/api/contact', { contactId })
        dispatch(loadContacts())
    }
    catch (error) {
        dispatch({ type: SAVE_CONTACT_ERROR, payload: error.response.data.error })
    }
}

export const deleteContact = (contactId) => async dispatch => {
    console.log({ contactId })
    try {
        const res = await axios.delete(`/api/contact/${contactId}`)
        dispatch(loadContacts())
    }
    catch (error) {
        console.log(error)
    }
}