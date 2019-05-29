import { SIGNIN, SIGNUP, LOGOUT, SIGNIN_ERROR, SIGNUP_ERROR } from '../types'

const initialState = {
    user: {},
    signinError: null,
    signupError: null
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SIGNIN:
        case SIGNUP:
            return { ...state, user: { ...action.payload } }
        case LOGOUT:
            return { ...state, user: {} }
        case SIGNIN_ERROR:
            return { ...state, signinError: action.payload }
        case SIGNUP_ERROR:
            return { ...state, signupError: action.payload }
        default: return state;
    }
}

export default reducer;