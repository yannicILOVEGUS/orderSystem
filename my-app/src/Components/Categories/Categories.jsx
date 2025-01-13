import React from "react";
import '../styles/containers.css';

const Categories = ({ onCategorySelect }) => {
  const categoriesItems = [
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
    <div className="homepageContainer" style={{ position: "relative" }}>
      {categoriesItems.map((category) => (
        <div
          key={category.id}
          className="productCard"
          onClick={() => onCategorySelect(category.id)}
          style={{ cursor: "pointer" }}
        >
          <div className="categoryIcon">{category.icon}</div>
          <div className="categoryName">{category.name}</div>
        </div>
      ))}
    </div>
  );
};

export default Categories;
