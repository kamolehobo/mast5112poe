import React, { useState } from 'react';
import './App.css';

interface MenuItem {
    name: string;
    description: string;
    course: string;
    price: number;
}

const App: React.FC = () => {
    const [dishName, setDishName] = useState('');
    const [description, setDescription] = useState('');
    const [course, setCourse] = useState('');
    const [price, setPrice] = useState<number | ''>('');
    const [menuItems, setMenuItems] = useState<MenuItem[]>([]);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (dishName && description && course && price) {
            const newItem: MenuItem = {
                name: dishName,
                description,
                course,
                price: Number(price),
            };
            setMenuItems([...menuItems, newItem]);
            setDishName('');
            setDescription('');
            setCourse('');
            setPrice('');
        }
    };

    return (
        <div className="container">
            <h1>Christoffel's Finest Menu</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={dishName}
                    onChange={(e) => setDishName(e.target.value)}
                    placeholder="Dish Name"
                    required
                />
                <input
                    type="text"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Description"
                    required
                />
                <select value={course} onChange={(e) => setCourse(e.target.value)} required>
                    <option value="" disabled>Select Course</option>
                    <option value="starters">Starters</option>
                    <option value="mains">Mains</option>
                    <option value="dessert">Dessert</option>
                </select>
                <input
                    type="number"
                    value={price}
                    onChange={(e) => setPrice(e.target.value ? Number(e.target.value) : '')}
                    placeholder="Price"
                    required
                />
                <button type="submit">Add Menu Item</button>
            </form>

            <h2>Menu Items (Total: {menuItems.length})</h2>
            <ul>
                {menuItems.map((item, index) => (
                    <li key={index}>
                        {item.name} ({item.course}) - {item.description} - ${item.price.toFixed(2)}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default App;

