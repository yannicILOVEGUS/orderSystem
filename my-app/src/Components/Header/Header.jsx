import React from 'react';
import './Header.css';

const Header = ({ onCategorySelect }) => {
  const categories = [
    { id: 1, name: "Burgers", icon: "🍔" },
    { id: 2, name: "Chicken", icon: "🍗" },
    { id: 3, name: "Fish", icon: "🐟" },
    { id: 4, name: "Salads", icon: "🥗" },
    { id: 5, name: "Fries", icon: "🍟" },
    { id: 6, name: "Desserts", icon: "🍦" },
    { id: 7, name: "Drinks", icon: "🥤" },
    { id: 8, name: "Happy Meal", icon: "🎉" },
  ];

  return (
    <header className="header">
      <div className="logo-container">
        <img src="/assets/Logo.jpg" alt="logo" className="logo" />
      </div>
      <div className="category-container">
        {categories.map((category) => (
          <button
            key={category.id}
            className="category-item"
            onClick={() => onCategorySelect(category.id)} // Kategorie auswählen
          >
            {category.icon} {category.name}
          </button>
        ))}
      </div>
    </header>
  );
};

export default Header;
