import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const FilterScreen: React.FC = () => {
  const [selectedCourse, setSelectedCourse] = useState('');

  const handleFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCourse(event.target.value);
    
  };

  return (
    <div className="screen-container">
      <h1>Filter Menu by Course</h1>
      <select value={selectedCourse} onChange={handleFilterChange}>
        <option value="" disabled>Select Course</option>
        <option value="starters">Starters</option>
        <option value="mains">Mains</option>
        <option value="dessert">Dessert</option>
      </select>
      <br />
    
      <Link to="/">
        <button>Back to Home</button>
      </Link>
    </div>
  );
};

export default FilterScreen;