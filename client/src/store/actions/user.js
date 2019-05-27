import axios from 'axios';


export const create = (user) => async dispatch => {
    try {
        const res = await axios.post('/api/user', user)
        console.log(res)
    } catch (error) {
        console.log(error)
    }
}


export const login = (cpf, password) => async dispatch => {
    try {
        const res = await axios.post('/api/user/login', { cpf, password })
        console.log(res)
    } catch (error) {
        console.log(error)
    }
}