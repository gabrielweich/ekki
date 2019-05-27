import { SIGNIN, SIGNUP } from '../types'

const initialState = {}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SIGNIN:
        case SIGNUP:
            return { ...state, ...action.payload }
        default: return state;
    }
}

export default reducer;