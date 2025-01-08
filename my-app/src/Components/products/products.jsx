import React, { useState } from "react";
import './products.css';
import '../styles/containers.css';

const Products = () => {
  const [animatingId, setAnimatingId] = useState(null);
  const [animationStyles, setAnimationStyles] = useState({});

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

  const handleCardClick = (id, event) => {
    if (animatingId === id) {
      setAnimatingId(null); // Reset animation state
      setAnimationStyles({});
    } else {
      const rect = event.currentTarget.getBoundingClientRect(); // Get card's position
      setAnimationStyles({
        '--start-x': `${rect.left}px`,
        '--start-y': `${rect.top}px`,
      });
      setAnimatingId(id); // Start animation for clicked card
    }
  };

  return (
    <div className="homepageContainer" style={{ position: "relative" }}>
      {meals.map((meal) => (
        <div key={meal.id}>
          <div
            className={`productCard ${animatingId === meal.id ? "fadeInOut" : ""}`}
            style={animatingId === meal.id ? animationStyles : {}}
            onClick={(event) => handleCardClick(meal.id, event)}
          >
            <div className="mealIcon">{meal.icon}</div>
            <div className="mealName">{meal.name}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
