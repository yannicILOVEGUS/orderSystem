import React from 'react';
import './products.css';
import '../styles/containers.css';

const Products = () => {
  const [animatingId, setAnimatingId] = useState(null);

  const meals = [
    { id: 1, name: "Cheeseburger", icon: "🍔", categoryId: 1 },
    { id: 2, name: "Grilled Chicken", icon: "🍗", categoryId: 2 },
    { id: 3, name: "Fried Fish", icon: "🐟", categoryId: 3 },
    { id: 4, name: "Caesar Salad", icon: "🥗", categoryId: 4 },
    { id: 5, name: "French Fries", icon: "🍟", categoryId: 5 },
    { id: 6, name: "Ice Cream", icon: "🍦", categoryId: 6 },
    { id: 7, name: "Milkshake", icon: "🥤", categoryId: 7 },
    { id: 8, name: "Pizza Slice", icon: "🍕", categoryId: 1 },
    { id: 9, name: "Tacos", icon: "🌮", categoryId: 2 },
    { id: 10, name: "Pasta Bowl", icon: "🍝", categoryId: 4 }
  ];

  const handleCardClick = (id) => {
    if (animatingId === id) {
      setAnimatingId(null); // Reset animation state
    } else {
      setAnimatingId(id); // Start animation for clicked card
    }
  };

  return (
    <div className="homepageContainer">
      {meals.map((meal) => (
        <div className="test" key={meal.id}>
          <div
            className={`productCard ${animatingId === meal.id ? "fadeInOut" : ""}`}
            onClick={() => handleCardClick(meal.id)}
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

