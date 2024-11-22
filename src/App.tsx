import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomeScreen from './components/HomeScreen';
import AddMenuScreen from './components/AddMenuScreen';
import FilterScreen from './components/FilterScreen';
import './styles.css';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/add-menu" element={<AddMenuScreen />} />
          <Route path="/filter" element={<FilterScreen />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;