// Menu.js

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../stylesComponents/Menu.css';


import { vegMenuItems, nonVegMenuItems } from '../FoodData/menuData';

function Menu() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category === selectedCategory ? null : category);
  };

  return (
    <section id="menu" className="menu-section">
      <h2>Our Menu</h2>
      <ul className="menu-list">
        {/* Vegetarian Menu */}
        {vegMenuItems.map((category, index) => (
          <li key={index} className="menu-category">
            <Link to={`/category/${category.title}`} className="menu-category-link">
              <div className="menu-category-header" onClick={() => handleCategoryClick(category.title)}>
                <h3>{category.title}</h3>
                <img src={category.image} alt={category.title} className="category-image" />
              </div>
            </Link>
            {selectedCategory === category.title && (
              <ul>
                {category.items.map((item, subIndex) => (
                  <li key={subIndex} className="menu-card">
                    <div className="menu-card-content">
                      <h4>{item.name}</h4>
                      <span className="price">{item.price}</span>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}

        {/* Non-Vegetarian Menu */}
        {nonVegMenuItems.map((category, index) => (
          <li key={index} className="menu-category">
            <Link to={`/category/${category.title}`} className="menu-category-link">
              <div className="menu-category-header" onClick={() => handleCategoryClick(category.title)}>
                <h3>{category.title}</h3>
                <img src={category.image} alt={category.title} className="category-image" />
              </div>
            </Link>
            {selectedCategory === category.title && (
              <ul>
                {category.items.map((item, subIndex) => (
                  <li key={subIndex} className="menu-card">
                    <div className="menu-card-content">
                      <h4>{item.name}</h4>
                      <span className="price">{item.price}</span>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Menu;
