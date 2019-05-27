import { SIGNIN, SIGNUP, LOGOUT } from '../types'

const initialState = {}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SIGNIN:
        case SIGNUP:
            return { ...state, ...action.payload }
        case LOGOUT:
            return {}
        default: return state;
    }
}

export default reducer;