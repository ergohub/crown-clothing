// import { CATEGORY_ACTION_TYPES } from "./category.types";

import { createSlice } from '@reduxjs/toolkit';

const CATEGORIES_INITIAL_STATE = {
    categories: [],
    isLoading: false,
    error: null,

}

export const categorySlice = createSlice({
    name: 'category',
    initialState: CATEGORIES_INITIAL_STATE,
    reducers: {
        setCategories(state, action) {
            state.categories = action.payload
        },
    },
});

export const { setCategories } = categorySlice.actions;

export const categoriesReducer = categorySlice.reducer;

// export default categoriesReducer;


// export const categoriesReducer = (state = CATEGORIES_INITIAL_STATE, action = {}) => {
//     const { type, payload } = action;

//     switch (type) {
//         case CATEGORY_ACTION_TYPES.FETCH_CATEGORIES_START:
//             return { ...state, isLoading: true }
//         case CATEGORY_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS:
//             return { ...state, categories: payload, isLoading: false }
//         case CATEGORY_ACTION_TYPES.FETCH_CATEGORIES_FAILED:
//             return { ...state, error: payload, isLoading: false }
//         default:
//             return state;
//     }

// }