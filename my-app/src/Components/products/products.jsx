import React, { useState, useRef } from "react";
import "./products.css";
import "../styles/containers.css";

const Products = () => {
  const [animatingId, setAnimatingId] = useState(null);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const cardRefs = useRef({});
  const originCoords = useRef({}); // Speichert Ursprung-Koordinaten

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
      {meals.map((meal) => {
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
                <button className="addToCartBtn">Add to cart</button>            
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Products;
