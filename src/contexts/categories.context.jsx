// React Components
import { createContext, useState, useEffect } from "react";
import SHOP_DATA from '../shop/shop-data.js';
import { getCategoriesAndDocuments } from "../utils/firebase/firebase.util.js";

// const products = SHOP_DATA;
export const CategoriesContext = createContext({
    categoriesMap: {},
});

export const CategoriesProvider = ({ children }) => {
    const [categoriesMap, setCategoriesMap] = useState({})
    const value = { categoriesMap }

    useEffect(() => {
        const getCategoryMap = async () => {
            const categoryMap = await getCategoriesAndDocuments();
            console.log(categoryMap);
            setCategoriesMap(categoryMap);
        }
        getCategoryMap();
    }, [])
    // set up categories collection in Firebase database
    // typically, you wouldn't do this on the front-end
    // useEffect(() => {
    //     addCollectionAndDocuments('categories', SHOP_DATA);
    // }, [])

    return <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>
}