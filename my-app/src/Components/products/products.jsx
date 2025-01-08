import React, { useState } from "react";
import './products.css';
import '../styles/containers.css';

const Products = () => {
  const [selectedId, setSelectedId] = useState(null);

  const meals = [
    { id: 1, name: "Cheeseburger", icon: "🍔" },
    { id: 2, name: "Grilled Chicken", icon: "🍗" },
    { id: 3, name: "Fried Fish", icon: "🐟" },
    { id: 4, name: "Caesar Salad", icon: "🥗" },
    { id: 5, name: "French Fries", icon: "🍟" },
    { id: 6, name: "Ice Cream", icon: "🍦" },
    { id: 7, name: "Milkshake", icon: "🥤" },
    { id: 8, name: "Pizza Slice", icon: "🍕" },
    { id: 9, name: "Tacos", icon: "🌮" },
    { id: 10, name: "Pasta Bowl", icon: "🍝" },
  ];

  const handleCardClick = (id) => {
    setSelectedId(selectedId === id ? null : id);
  };

  return (
    <div className="homepageContainer">
      {meals.map((meal) => (
        <div
          key={meal.id}
          className={`productCard ${selectedId === meal.id ? "selected" : ""}`}
          onClick={() => handleCardClick(meal.id)}
        >
          <div className="mealIcon">{meal.icon}</div>
          <div className="mealName">{meal.name}</div>
        </div>
      ))}
    </div>
  );
};

export default Products;
