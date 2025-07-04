import { createContext, useEffect, useReducer } from 'react';
import { onAuthStateChangedListener, signOutUser, createUserFromAuth } from "../utils/firebase/firebase.util";

//as the actual value that we want
export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => null,
});

const USER_ACTION_TYPES = {
    SET_CURRENT_USER: 'SET_CURRENT_USER',
}
const userReducer = (state, action) => {
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
            throw new Error(`Unhandled type ${type} in the userReducer`);
    }
}

const INITAL_STATE = {
    currentUser: null
}

export const UserProvider = ({ children }) => {
    // const [currentUser, setCurrentUser] = useState(null)
    const [state, dispatch] = useReducer(userReducer, INITAL_STATE);
    const { currentUser } = state;

    // console.log(currentUser); // debug - remove

    const setCurrentUser = (user) => {
        dispatch({
            type: USER_ACTION_TYPES.SET_CURRENT_USER,
            payload: user
        })
    }
    const value = { currentUser, setCurrentUser }

    useEffect(() => {
        const unsubscribe = onAuthStateChangedListener((user) => {
            if (user) {
                createUserFromAuth(user);
            }
            setCurrentUser(user)
        });
        return unsubscribe;
    }, [])
    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}