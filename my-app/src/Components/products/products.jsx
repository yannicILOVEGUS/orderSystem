import React from 'react';
import './products.css';
import '../styles/containers.css';

const Products = ({ selectedCategory }) => {
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

  
  const filteredMeals = selectedCategory
    ? meals.filter(meal => meal.categoryId === selectedCategory)
    : meals;

  return (
    <div className="homepageContainer">
      {filteredMeals.map((meal) => (
        <div key={meal.id} className="productCard">
          <div className="mealIcon">{meal.icon}</div>
          <div className="mealName">{meal.name}</div>
        </div>
      ))}
    </div>
  );
};

export default Products;

