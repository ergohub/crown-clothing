import { configureStore } from "@reduxjs/toolkit";
// import { compose, createStore, applyMiddleware } from "redux";
// import { persistStore, persistReducer } from "redux-persist";
// import storage from 'redux-persist/lib/storage';
// import { thunk } from "redux-thunk";

import logger from "redux-logger";

import { rootReducer } from "./root-reducer";


// const persistConfig = {
//     key: 'root',
//     storage,
//     blacklist: ['user'],
// }

// const persistedReducer = persistReducer(persistConfig, rootReducer);

// const middleWares = [process.env.NODE_ENV !== 'production' && logger, thunk].filter(Boolean) // Hide middleware if not in production
// /*
// Middlewares ehance the store. They catch actions
// before they hit our reducers and log out the state.
// */

export const store = configureStore({
    reducer: rootReducer,
    // middleware: middleWares
});

// const composeEnhancer = (process.env.NODE_ENV !== 'production' && window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose; // Devtools

// const composedEnhancers = composeEnhancer(applyMiddleware(...middleWares))

// export const store = createStore(persistedReducer, undefined, composedEnhancers);

// export const persistor = persistStore(store);