// MenuItemCard.js
import React from 'react';

function MenuItemCard({ item }) {
  return (
    <div className="menu-item-card">
      <img
        src={item.image}
        alt={item.name}
        style={{ width: '289px', height: '250px' }} // Adjust the dimensions as needed
      />
      <h3>{item.name}</h3>
      <p>{item.description}</p>
      <p>Price: R{item.price.toFixed(2)}</p>
    </div>
  );
}

export default MenuItemCard;

