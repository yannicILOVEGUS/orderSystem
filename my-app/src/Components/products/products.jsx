import React, { useState, useRef } from 'react';
import './products.css';
import '../styles/containers.css';
import { useCart } from '../Context/CartStoreContext';

const Products = ({selectedCategory}) => {
  const  {hinzufuegen}  = useCart();
  const [animatingId, setAnimatingId] = useState(null);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const cardRefs = useRef({});
  const originCoords = useRef({}); // Speichert Ursprung-Koordinaten

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
    const cardElement = cardRefs.current[id];
    if (animatingId === id || isFadingOut) return;

    if (cardElement) {
      const originElement = document.getElementById(`productCardOrigin-${id}`);
      if (!originElement) return;

      const originRect = originElement.getBoundingClientRect();
      originCoords.current[id] = {
        width: originRect.width,
        height: originRect.height,
        top: originRect.top,
        left: originRect.left,
      };

      const rect = cardElement.getBoundingClientRect();
      cardElement.style.top = `${rect.top}px`;
      cardElement.style.left = `${rect.left}px`;

      const cardCenterX = rect.left + rect.width / 3.3;
      const cardCenterY = rect.top + rect.height / 3;
      const viewportCenterX = window.innerWidth / 3.4;
      const viewportCenterY = window.innerHeight / 3;

      const offsetX = viewportCenterX - cardCenterX;
      const offsetY = viewportCenterY - cardCenterY;

      cardElement.style.setProperty("--start-x", `${offsetX}px`);
      cardElement.style.setProperty("--start-y", `${offsetY}px`);
    }

    setAnimatingId(id);
    setIsFadingOut(false);
  };

  const handleBackClick = () => {
    if (animatingId) {
      const cardElement = cardRefs.current[animatingId];
      const originData = originCoords.current[animatingId]; // Ursprung-Daten abrufen
      if (!cardElement || !originData) return;

      cardElement.classList.remove("fadeIn");

      // Berechne Ziel-Koordinaten für die Animation
      const rect = cardElement.getBoundingClientRect();
      const destWidth = originData.width;
      const destHeight = originData.height;
      const endX = originData.left - rect.left;
      const endY = originData.top - rect.top;

      // Setze die CSS-Variablen für die Animation
      cardElement.style.setProperty("--start-width", `${rect.width}px`);
      cardElement.style.setProperty("--start-height", `${rect.height}px`);
      cardElement.style.setProperty("--dest-width", `${destWidth}px`);
      cardElement.style.setProperty("--dest-height", `${destHeight}px`);
      cardElement.style.setProperty("--end-x", `${endX}px`);
      cardElement.style.setProperty("--end-y", `${endY}px`);

      // Füge die fadeOut-Klasse hinzu
      cardElement.classList.add("fadeOut");

      const onAnimationEnd = () => {
        cardElement.classList.remove("fadeOut");
        cardElement.style.removeProperty("--start-width");
        cardElement.style.removeProperty("--start-height");
        cardElement.style.removeProperty("--dest-width");
        cardElement.style.removeProperty("--dest-height");
        cardElement.style.removeProperty("--end-x");
        cardElement.style.removeProperty("--end-y");
        cardElement.style.removeProperty("--start-x");
        cardElement.style.removeProperty("--start-y");
        cardElement.style.removeProperty("top");
        cardElement.style.removeProperty("left");
        cardElement.removeEventListener("animationend", onAnimationEnd);

        setAnimatingId(null);
        setIsFadingOut(false);
      };

      cardElement.addEventListener("animationend", onAnimationEnd);
    }
  };
  
  return (
    <div className="homepageContainer" style={{ position: "relative" }}>
      {filteredMeals.map((meal) => {
        let cardClass = "productCard";
        if (animatingId === meal.id && !isFadingOut) {
          cardClass += " fadeIn";
        }
        return (
          <div id={`productCardOrigin-${meal.id}`} key={meal.id}>
            <div
              ref={(el) => (cardRefs.current[meal.id] = el)}
              className={cardClass}
              onClick={() => handleCardClick(meal.id)}
            >
              {animatingId === meal.id && !isFadingOut && (
                <button className="backBtn" onClick={handleBackClick}>
                  &lt;
                </button>
              )}
                <div className="mealIcon">{meal.icon}</div>
                <div className="mealName">{meal.name}</div>           
                <button className="addToCartBtn" onClick={(e) => {e.stopPropagation();  hinzufuegen(meal); }}> Add to cart</button>           
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Products;

