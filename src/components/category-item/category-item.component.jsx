import { useNavigate } from 'react-router-dom';
import './category.style';
import { BackgroundImage, CategoryContainer, CategoryBodyContainer } from './category.style';

const CategoryItem = ({ category }) => {
  const { imageUrl, title, route } = category;
  const navigate = useNavigate()
  const onNavigateHandler = () => navigate(route);
  return (

    <CategoryContainer className='large' onClick={onNavigateHandler}>
      <BackgroundImage
        $imageurl={imageUrl}
      />
      <CategoryBodyContainer>
        <h2>{title}</h2>
        <p>shop Now</p>
      </CategoryBodyContainer>
    </CategoryContainer>
  )

}

export default CategoryItem;