import React, { useState } from 'react';
import './products.css';
import '../styles/containers.css';
import { useCart } from '../Context/CartStoreContext';

const Products = ({selectedCategory}) => {
  const [selectedId, setSelectedId] = useState(null); // Zustand für die ausgewählte Produkt-ID
  const  {hinzufuegen}  = useCart();
 
  const meals = [
    { id: 1, name: "Cheeseburger", icon: "🍔", categoryId: 1, preis: 5.99 },
    { id: 2, name: "Grilled Chicken", icon: "🍗", categoryId: 2, preis: 6.99 },
    { id: 3, name: "Fried Fish", icon: "🐟", categoryId: 3, preis: 7.99 },
    { id: 4, name: "Caesar Salad", icon: "🥗", categoryId: 4, preis: 4.99 },
    { id: 5, name: "French Fries", icon: "🍟", categoryId: 5, preis: 2.99 },
    { id: 6, name: "Ice Cream", icon: "🍦", categoryId: 6, preis: 3.99 },
    { id: 7, name: "Milkshake", icon: "🥤", categoryId: 7, preis: 5.49 },
    { id: 8, name: "Pizza Slice", icon: "🍕", categoryId: 1, preis: 3.49 },
    { id: 9, name: "Tacos", icon: "🌮", categoryId: 2, preis: 4.49 },
    { id: 10, name: "Pasta Bowl", icon: "🍝", categoryId: 4, preis: 5.99 },
    { id: 11, name: "Chicken Nuggets", icon: "🍗", categoryId: 2, preis: 5.49 },
    { id: 12, name: "Fish Sandwich", icon: "🐟", categoryId: 3, preis: 5.99 },
    { id: 13, name: "BBQ Chicken Wrap", icon: "🍗", categoryId: 2, preis: 6.29 },
    { id: 14, name: "Fish and Chips", icon: "🐟", categoryId: 3, preis: 7.49 },
    { id: 15, name: "Cheese Fries", icon: "🍟", categoryId: 5, preis: 3.49 },
    { id: 16, name: "Chocolate Sundae", icon: "🍫", categoryId: 6, preis: 2.99 },
    { id: 17, name: "Chicken Caesar Salad", icon: "🥗", categoryId: 4, preis: 6.49 },
    { id: 18, name: "Spicy Chicken Burger", icon: "🍔", categoryId: 1, preis: 5.49 },
    { id: 19, name: "Grilled Fish Tacos", icon: "🐟", categoryId: 3, preis: 5.99 },
    { id: 20, name: "Frozen Yogurt", icon: "🍦", categoryId: 6, preis: 3.49 },
    { id: 21, name: "Veggie Wrap", icon: "🥗", categoryId: 4, preis: 4.99 },
    { id: 22, name: "Happy Meal", icon: "🎉", categoryId: 8, preis: 5.49 },
    { id: 23, name: "BBQ Fries", icon: "🍟", categoryId: 5, preis: 3.99 },
    { id: 24, name: "Fruit Salad", icon: "🍓", categoryId: 6, preis: 3.29 },
    { id: 25, name: "Milkshake (Chocolate)", icon: "🥤", categoryId: 7, preis: 5.99 },
    { id: 26, name: "Cheese Burger Deluxe", icon: "🍔", categoryId: 1, preis: 6.49 },
    { id: 27, name: "Chicken Fries", icon: "🍗", categoryId: 2, preis: 5.99 },
    { id: 28, name: "Fish Fillet", icon: "🐟", categoryId: 3, preis: 6.49 },
    { id: 29, name: "Garlic Bread", icon: "🍞", categoryId: 5, preis: 2.99 },
    { id: 30, name: "Cinnamon Rolls", icon: "🍩", categoryId: 6, preis: 2.49 },
    { id: 31, name: "Chicken Tenders", icon: "🍗", categoryId: 2, preis: 4.79 },
    { id: 32, name: "Fish Fillet Sandwich", icon: "🐟", categoryId: 3, preis: 6.19 },
    { id: 33, name: "Vegetable Fries", icon: "🍟", categoryId: 5, preis: 3.29 },
    { id: 34, name: "Frosty Milkshake", icon: "🥤", categoryId: 7, preis: 4.49 },
    { id: 35, name: "Chicken Wrap", icon: "🍗", categoryId: 2, preis: 5.29 },
    { id: 36, name: "Fish and Fries Combo", icon: "🐟", categoryId: 3, preis: 8.99 },
    { id: 37, name: "Pineapple Sundae", icon: "🍍", categoryId: 6, preis: 3.69 },
    { id: 38, name: "Onion Rings", icon: "🧅", categoryId: 5, preis: 2.79 },
    { id: 39, name: "Burger King Whopper", icon: "🍔", categoryId: 1, preis: 6.99 },
    { id: 40, name: "Chicken Parmesan Sandwich", icon: "🍗", categoryId: 2, preis: 7.49 },
    { id: 41, name: "Grilled Fish Burger", icon: "🐟", categoryId: 3, preis: 6.99 },
    { id: 42, name: "Taco Salad", icon: "🥗", categoryId: 4, preis: 5.49 },
    { id: 43, name: "Cheese Sticks", icon: "🧀", categoryId: 5, preis: 3.19 },
    { id: 44, name: "Strawberry Shake", icon: "🍓", categoryId: 7, preis: 4.99 },
    { id: 45, name: "Hot Dog", icon: "🌭", categoryId: 1, preis: 3.49 },
    { id: 46, name: "Mozzarella Sticks", icon: "🧀", categoryId: 5, preis: 4.29 },
    { id: 47, name: "Crispy Chicken Burger", icon: "🍗", categoryId: 2, preis: 5.99 },
    { id: 48, name: "Ice Cream Cone", icon: "🍦", categoryId: 6, preis: 2.49 },
    { id: 49, name: "Crispy Fish Wrap", icon: "🐟", categoryId: 3, preis: 5.49 },
    { id: 50, name: "Veggie Burger", icon: "🍔", categoryId: 1, preis: 5.99 }
  ];
  

  const filteredMeals = selectedCategory
    ? meals.filter(meal => meal.categoryId === selectedCategory)
    : meals;

  const handleCardClick = (id) => {
    setSelectedId(selectedId === id ? null : id); 
  };
  
  return (
    <div className="homepageContainer">
      {filteredMeals.map((meal) => (
        <div
          key={meal.id}
          className={`productCard ${selectedId === meal.id ? "selected" : ""}`} // Markiert das ausgewählte Produkt
          onClick={() => handleCardClick(meal.id)}>
          <div className="mealIcon">{meal.icon}</div>
          <div className="mealName">{meal.name}</div>
          <button className='addCart' onClick={() => hinzufuegen(meal)}>+</button>
        </div>
      ))}
    </div>
  );
};

export default Products;

