import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const AddMenuScreen: React.FC = () => {
  const [menuItems, setMenuItems] = useState<{ name: string, description: string, course: string, price: number }[]>([]);

  const handleRemoveItem = (index: number) => {
    const updatedMenuItems = [...menuItems];
    updatedMenuItems.splice(index, 1);
    setMenuItems(updatedMenuItems);
  };

  return (
    <div className="screen-container">
      <h1>Add a Menu Item</h1>
      <form>
        
      </form>

      <ul>
        {menuItems.map((item, index) => (
          <li key={index}>
            {item.name} - ${item.price.toFixed(2)} <button onClick={() => handleRemoveItem(index)}>Remove</button>
          </li>
        ))}
      </ul>

      <Link to="/">
        <button>Back to Home</button>
      </Link>
    </div>
  );
};
export default AddMenuScreen;


export {}; 
