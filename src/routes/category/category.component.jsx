import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
// import { CategoriesContext } from '../../contexts/categories.context';
import ProductCard from '../../components/product/product.component';

import { useSelector } from "react-redux";
import { selectCategoriesMap } from "../../store/categories/category.selector";

import '../category/category.styles.jsx';
import { CategoryContainer, Title } from '../category/category.styles.jsx';

const Category = () => {

    const { category } = useParams();
    const categoriesMap = useSelector(selectCategoriesMap);
    // const { categoriesMap } = useContext(CategoriesContext);
    const [products, setProducts] = useState(categoriesMap[category]);

    useEffect(() => {
        setProducts(categoriesMap[category]);
    }, [category, categoriesMap])

    return (
        <>
            <Title>{category.toUpperCase()}</Title>
            <CategoryContainer>
                {products &&
                    products.map((product) => <ProductCard key={product.id} product={product} />)}
            </CategoryContainer>
        </>
    )
};

export default Category;