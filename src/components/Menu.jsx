import React from 'react';
import '../stylesComponents/Menu.css';

function Menu() {
  const menuItems = [
    { title: 'Pizza', description: 'Classic cheese pizza with fresh toppings', price: '$12', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Pizza-3007395.jpg/800px-Pizza-3007395.jpg' },
    { title: 'Burger', description: 'Juicy beef burger with lettuce, tomato, and cheese', price: '$10', image: 'https://www.shutterstock.com/image-photo/burger-tomateoes-lettuce-pickles-on-600nw-2309539129.jpg' },
    { title: 'Pasta', description: 'Creamy Alfredo pasta with garlic bread', price: '$15', image: 'https://myfoodstory.com/wp-content/uploads/2023/01/air-fryer-pasta-5.jpg' },
    { title: 'Salad', description: 'Fresh garden salad with a variety of dressings', price: '$8', image: 'https://www.licious.in/blog/wp-content/uploads/2022/11/shutterstock_310087187-750x517.jpg' }
  ];

  return (
    <section id="menu" className="menu-section">
      <h2>Our Menu</h2>
      <ul className="menu-list">
        {menuItems.map((item, index) => (
          <li key={index} className="menu-card" style={{ backgroundImage: `url(${item.image})` }}>
            <div className="menu-card-content">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <span className="price">{item.price}</span>
            </div>
          </li>
        ))}
      </ul>
      
    </section>
  );
}

export default Menu;
