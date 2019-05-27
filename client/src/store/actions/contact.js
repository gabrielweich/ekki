import axios from 'axios';

import { LOAD_CONTACTS, SAVE_CONTACT, DELETE_CONTACT } from '../types';

export const loadContacts = () => async dispach => {
    try {
        const res = await axios.get('/api/contact')
        dispach({ type: LOAD_CONTACTS, payload: res.data.data })
    }
    catch (error) {
        console.log(error)
    }
}