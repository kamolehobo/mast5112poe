import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { calculateAveragePrice } from '../utilities/helpers';

const HomeScreen: React.FC = () => {
  const [menuItems, setMenuItems] = useState<{ name: string, description: string, course: string, price: number }[]>([]);

  const averagePrice = calculateAveragePrice(menuItems, '');

  return (
    <div className="screen-container">
      <h1>Christoffel's Finest Menu</h1>
      <h2>Menu Items (Total: {menuItems.length})</h2>
      <h3>Average Price: ${averagePrice.toFixed(2)}</h3>

      <Link to="/add-menu">
        <button>Add Menu Item</button>
      </Link>

      <Link to="/filter">
        <button>Filter by Course</button>
      </Link>
    </div>
  );
};
export default HomeScreen;

export {};  
