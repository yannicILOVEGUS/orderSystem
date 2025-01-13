import React from "react";
import '../styles/containers.css';

const Categories = ({ onCategorySelect }) => {
  const categoriesItems = [
    { id: 1, name: "Burger", image:'/assets/CatecoryImg/Burger.png'},
    { id: 2, name: "Chicken", image:'/assets/CatecoryImg/chicken.png'},
    { id: 3, name: "Fish", image:'/assets/CatecoryImg/Lachs.png' },
    { id: 4, name: "Salads", image:'/assets/CatecoryImg/salat-chicken.png' },
    { id: 5, name: "Fries", image:'/assets/CatecoryImg/fries.png' },
  ];

  return (
    <div className="homepageContainer" style={{ position: "relative" }}>
      {categoriesItems.map((category) => (
        <div
          key={category.id}
          className="productCard"
          onClick={() => onCategorySelect(category.id, category.name)}
          style={{ cursor: "pointer" }}
        >
           <img src={category.image} alt={category.name} className="mealImage" />
          <div className="categoryName">{category.name}</div>
        </div>
      ))}
    </div>
  );
};

export default Categories;
