import React from 'react';
import { useParams } from 'react-router-dom';
import { vegMenuItems, nonVegMenuItems } from '../FoodData/menuData';
function CategoryItems() {
  const { categoryName } = useParams();
  const decodedCategoryName = decodeURIComponent(categoryName);

  console.log('Encoded categoryName:', categoryName);
  console.log('Decoded categoryName:', decodedCategoryName);

  const formattedCategoryName = decodedCategoryName.replace(/\s+/g, '').toLowerCase();

  console.log('Formatted categoryName:', formattedCategoryName);

  const findCategory = (formattedCategoryName) => {
  
    let category = vegMenuItems.find((cat) => cat.title.replace(/\s+/g, '').toLowerCase() === formattedCategoryName);
    if (!category) {
      category = nonVegMenuItems.find((cat) => cat.title.replace(/\s+/g, '').toLowerCase() === formattedCategoryName);
    }
    return category;
  };
  
  const category = findCategory(formattedCategoryName);

  if (!category) {
    return <div>Category not found</div>; 
  }

  return (
    <div className="category-items">
      <h2>{category.title}</h2>
      <ul>
        {category.items.map((item, index) => (
          <li key={index} className="menu-card">
            <div className="menu-card-content">
              <h4>{item.name}</h4>
              <span className="price">{item.price}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CategoryItems;
