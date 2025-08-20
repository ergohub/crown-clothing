import { createSelector } from "reselect";

const selectCategoryReducer = (state) => state.categories;

export const selectCategories = createSelector(
    [selectCategoryReducer], // input selector
    (categoriesSlice) => categoriesSlice.categories

    /* output selector.  Will only run if
    categoriesSlice that we get from selectCategoryReducer
    is different to what has previously been received */

);

export const selectCategoriesMap = createSelector(
    [selectCategories],
    (categories) => {
        // console.log(categories);
        return categories.reduce((acc, category) => {
            const { title, items } = category;
            acc[title.toLowerCase()] = items;
            return acc;
        }, {})
    });


// state.categories.categories.reduce((acc, category) => {
//     const { title, items } = category;
//     acc[title.toLowerCase()] = items;
//     return acc;
// }, {});