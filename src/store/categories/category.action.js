import { CATEGORY_ACTION_TYPES } from "./category.types";
import { createAction } from '../../utils/reducer/reducer.utils'
import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.util";

// export const setCategories = (categoriesArray) => {
//     return createAction(CATEGORY_ACTION_TYPES.SET_CATEGORIES, categoriesArray);
// }

export const fetchCategoriesStart = () =>
    createAction(CATEGORY_ACTION_TYPES.FETCH_CATEGORIE_START);

export const fetchCategoriesSuccess = (categoriesArray) =>
    createAction(CATEGORY_ACTION_TYPES.FETCH_CATEGORIE_SUCCESS, categoriesArray);

export const fetchCategoriesFailed = (error) =>
    createAction(CATEGORY_ACTION_TYPES.FETCH_CATEGORIE_FAILED, error);

export const fetchCategoriesAsync = () => async (dispatch) => {
    dispatch(fetchCategoriesStart());
    try {
        const categoriesArray = await getCategoriesAndDocuments();
        dispatch(fetchCategoriesSuccess(categoriesArray))
    } catch (error) {
        dispatch(fetchCategoriesFailed(error))
    }

}