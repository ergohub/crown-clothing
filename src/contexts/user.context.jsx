import { createContext, useState, useEffect } from "react";
import { onAuthStateChangedListener, signOutUser, createUserFromAuth } from "../utils/firebase/firebase.util";

//as the actual value that we want
export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => null,
});

export const UserProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null)
    const value = { currentUser, setCurrentUser }

    // signOutUser();

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