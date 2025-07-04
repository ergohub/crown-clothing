import { USER_ACTION_TYPES } from '../user/user.types'

const INITAL_STATE = {
    currentUser: null
}

// need to give state a value
const userReducer = (state = INITAL_STATE, action) => {
    const { type, payload } = action;
    // console.log('Dispatched'); // debug - remove
    // console.log(action);

    switch (type) {
        case USER_ACTION_TYPES.SET_CURRENT_USER:
            return {
                ...state,
                currentUser: payload
            };
        default:
            return state;
        /* 
        Reducers recives all actions that dispatch, therefore, we need to return the default state,
        so if ther reducer cannot match the `type`, we return the initial state.
        */
    }
}

export default userReducer;