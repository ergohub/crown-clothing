import './category.style.scss';

const CategoryItem = ({ category }) => {
  return (
    <div className="category-container large">
      <div className='background-image' style={{
        backgroundImage: `url(${category.imageUrl})`
      }} />
      <div className="category-body-container">
        <h2>{category.title}</h2>
        <p>shop Now</p>
      </div>
    </div>
  )

}

export default CategoryItem