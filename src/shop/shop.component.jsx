// import { useContext } from "react";
// import { CategoriesContext } from "../contexts/categories.context";
// // import ProductCard from "../components/product/product.component";
// import CategoryPreview from "../components/category-preview/category-preview.component";

import { Routes, Route } from 'react-router-dom';
import CategoriesPreview from '../routes/categories-preview/categories-preview.component';
import Category from '../routes/category/category.component';
import { useDispatch } from 'react-redux';
import { setCategoriesMap } from '../store/categories/category.action.js';

// React Components
import { useEffect } from 'react';
import { getCategoriesAndDocuments } from "../utils/firebase/firebase.util.js";
// import './shop.styles.scss';

const Shop = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const getCategoryMap = async () => {
            const categoryMap = await getCategoriesAndDocuments();
            dispatch(setCategoriesMap(categoryMap));
        }
        getCategoryMap();
    }, [])

    return (
        <Routes>
            <Route index element={<CategoriesPreview />} />
            <Route path=':category' element={<Category />} /> {/* using a parameter that can be accessed from a component*/}
        </Routes>
    );
};

export default Shop;