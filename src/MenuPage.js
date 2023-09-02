// MenuPage.js
import React from 'react';
import MenuItemCard from './MenuItemCard';
import menuItems from './MenuData'; // Import your menu data
// Import your CSS for styling the menu page

function MenuPage() {
  return (
    <div className="menu-page">
      <h1>Menu</h1>
      <div className="menu-items-container">
        {menuItems.map((item, index) => (
          <div className="menu-item-card-container" key={index}>
            <MenuItemCard item={item} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default MenuPage;


