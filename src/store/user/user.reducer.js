import { createSlice } from '@reduxjs/toolkit';

import { USER_ACTION_TYPES } from '../user/user.types'
// import { setCurrentUser } from './user.action';

const INITAL_STATE = {
    currentUser: null
}

export const userSlice = createSlice({
    name: 'user',
    initialState: INITAL_STATE,
    reducers: {
        setCurrentUser(state, action) {
            state.currentUser = action.payload // actually genertes a new state object.  Only mutation style.
        }
    }
})

// need to give state a value
// const userReducer = (state = INITAL_STATE, action) => {
//     const { type, payload } = action;
//     // console.log('Dispatched'); // debug - remove
//     // console.log(action);

//     switch (type) {
//         case USER_ACTION_TYPES.SET_CURRENT_USER:
//             return {
//                 ...state,
//                 currentUser: payload
//             };
//         default:
//             return state;
//         /* 
//         Reducers recives all actions that dispatch, therefore, we need to return the default state,
//         so if ther reducer cannot match the `type`, we return the initial state.
//         */
//     }
// }

export const { setCurrentUser } = userSlice.actions; // returns the action

export const userReducer = userSlice.reducer; // reducer