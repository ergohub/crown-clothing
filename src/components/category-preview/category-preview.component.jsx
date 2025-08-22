// import { Link } from 'react-router-dom';
import ProductCard from '../product/product.component';
import './category-preview.styles.jsx'
import { CategoryPreviewContainer, Preview, Title } from './category-preview.styles.jsx';

const CategoryPreview = ({ title, products }) => {
    return (
        <CategoryPreviewContainer>
            <h2>
                <Title to={title}>{title.toUpperCase()}</Title>
            </h2>
            <Preview>
                {
                    products
                        .filter((_, idx) => idx < 4)
                        .map((product) =>
                            product &&
                            <ProductCard to={title} key={product.id} product={product}></ProductCard>)
                }
            </Preview>
        </CategoryPreviewContainer>
    )
};

export default CategoryPreview;