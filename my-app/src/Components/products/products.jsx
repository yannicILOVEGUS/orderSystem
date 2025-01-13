import React, { useState, useRef } from 'react';
import './products.css';
import '../styles/containers.css';
import { useCart } from '../Context/CartStoreContext';
import Button from '@mui/material/Button';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const Products = ({selectedCategory}) => {
  const { hinzufuegen } = useCart();
  const [animatingId, setAnimatingId] = useState(null);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const cardRefs = useRef({});
  const originCoords = useRef({});

  const meals = [
    { id: 1, name: "Cheeseburger", image: '/assets/meal_display_images/cheeseburger.png', categoryId: 1, preis: 5.99 },
    { id: 2, name: "Grilled Chicken", image: '/assets/meal_display_images/grilled_chicken.png', categoryId: 2, preis: 6.99 },
    { id: 3, name: "Fried Fish", image: '/assets/meal_display_images/fried_fish.png', categoryId: 3, preis: 7.99 },
    { id: 4, name: "Caesar Salad", image: '/assets/meal_display_images/caesar_salad.png', categoryId: 4, preis: 4.99 },
    { id: 5, name: "French Fries", image: '/assets/meal_display_images/french_fries.png', categoryId: 5, preis: 2.99 },
    { id: 6, name: "Ice Cream", image: '/assets/meal_display_images/icecream.png', categoryId: 6, preis: 3.99 },
    { id: 7, name: "Milkshake", image: '/assets/meal_display_images/milkshake.png', categoryId: 7, preis: 5.49 },
    { id: 8, name: "Ritter Sport Bigmac", image: '/assets/meal_display_images/ritter_bigmac.jpg', categoryId: 1, preis: 7.00 },
    { id: 9, name: "Ritter Sport Döner", image: '/assets/meal_display_images/ritter-doener.jpg', categoryId: 1, preis: 7.00 },
  ];

  const filteredMeals = selectedCategory
    ? meals.filter(meal => meal.categoryId === selectedCategory)
    : meals;

    const handleCardClick = (id) => {
        if (animatingId !== null) {
          handleBackClick();
          return;
        }
      
        const cardElement = cardRefs.current[id];
        if (cardElement) {
          const imageElement = cardElement.querySelector('.mealImage');
          if (imageElement) {
            imageElement.classList.add('selected');
          }
      
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
      
      const handleBackClick = (callback = null) => {
        if (animatingId) {
          const cardElement = cardRefs.current[animatingId];
          const imageElement = cardElement.querySelector('.mealImage');
          const checklistElement = cardElement.querySelector('#checklist');
          const backBtn = cardElement.querySelector('.backBtn');
      
          if (imageElement) {
            imageElement.classList.remove('selected');
            imageElement.classList.add('deselected');
          }
      
          if (checklistElement) {
            checklistElement.classList.add('disappear');
            const onChecklistAnimationEnd = () => {
              checklistElement.classList.remove('disappear');
              checklistElement.style.display = 'none';
              checklistElement.removeEventListener('animationend', onChecklistAnimationEnd);
            };
            checklistElement.addEventListener('animationend', onChecklistAnimationEnd);
          }
      
          if (backBtn) {
            backBtn.classList.add('disappear');
            const onBackBtnAnimationEnd = () => {
              backBtn.classList.remove('disappear');
              backBtn.style.display = 'none';
              backBtn.removeEventListener('animationend', onBackBtnAnimationEnd);
            };
            backBtn.addEventListener('animationend', onBackBtnAnimationEnd);
          }
      
          const originData = originCoords.current[animatingId];
          if (!cardElement || !originData) return;
      
          cardElement.classList.remove("fadeIn");
      
          const rect = cardElement.getBoundingClientRect();
          const destWidth = originData.width;
          const destHeight = originData.height;
          const endX = originData.left - rect.left;
          const endY = originData.top - rect.top;
      
          cardElement.style.setProperty("--start-width", `${rect.width}px`);
          cardElement.style.setProperty("--start-height", `${rect.height}px`);
          cardElement.style.setProperty("--dest-width", `${destWidth}px`);
          cardElement.style.setProperty("--dest-height", `${destHeight}px`);
          cardElement.style.setProperty("--end-x", `${endX}px`);
          cardElement.style.setProperty("--end-y", `${endY}px`);
      
          cardElement.classList.add("fadeOut");
      
          const onFadeOutEnd = () => {
            imageElement.classList.remove('deselected');
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
            cardElement.removeEventListener("animationend", onFadeOutEnd);
      
            setAnimatingId(null);
            setIsFadingOut(false);
      
            if (callback) {
              callback();
            }
          };
      
          cardElement.addEventListener("animationend", onFadeOutEnd);
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
                <button className="backBtn" onClick={(e) => {
                  e.stopPropagation();
                  handleBackClick();
                }}>
                  <ArrowBackIcon />
                </button>
              )}
              <div>
                <img src={meal.image} alt={meal.name} className="mealImage" />
                <div className="mealName">{meal.name}</div>
              </div>
              {animatingId === meal.id && !isFadingOut && (
                <div id="checklist" className="radioCard">
                    <h3 className="radioCardTitle">Choose a size</h3>
                    <div className="radioGroup">
                    <div className="radioOption">
                        <input
                        value="1"
                        name={`size-${meal.id}`}
                        type="radio"
                        id={`small-${meal.id}`}
                        onClick={(e) => e.stopPropagation()}
                        />
                        <label htmlFor={`small-${meal.id}`}>Small</label>
                    </div>
                    <div className="radioOption">
                        <input
                        value="2"
                        name={`size-${meal.id}`}
                        type="radio"
                        id={`medium-${meal.id}`}
                        onClick={(e) => e.stopPropagation()}
                        />
                        <label htmlFor={`medium-${meal.id}`}>Medium</label>
                    </div>
                    <div className="radioOption">
                        <input
                        value="3"
                        name={`size-${meal.id}`}
                        type="radio"
                        id={`large-${meal.id}`}
                        onClick={(e) => e.stopPropagation()}
                        />
                        <label htmlFor={`large-${meal.id}`}>Large</label>
                    </div>
                    </div>
                </div>
                )}




              <Button
                variant="outlined"
                onClick={(e) => {
                  e.stopPropagation();
                  hinzufuegen(meal);
                }}
              >
                Add to cart
              </Button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Products;