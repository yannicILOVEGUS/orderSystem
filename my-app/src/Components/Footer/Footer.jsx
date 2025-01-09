import React, { useState } from "react";
import './Footer.css';
import Cart from "./Cart";
import { useCart } from '../Context/CartStoreContext';

const Footer = () => {
  const { warenkorb, hinzufuegen } = useCart();
  const itemCount = warenkorb.reduce((total, item) => total + item.menge, 0);
  const [showNewDiv, setShowNewDiv] = useState(false);

  // Funktion zum Umschalten des States
  const toggleNewDiv = () => {
    setShowNewDiv(prevState => !prevState);
  };

  return (
    <footer className="footer">
      <div className="icon-cart" onClick={toggleNewDiv}>
                <img src="/assets/Cart.svg" alt="Cart Icon" />
                <span className="itemCounter">{itemCount}</span>
      </div>

      {showNewDiv && <div className="overlay" onClick={toggleNewDiv}></div>}

      {/* Wenn showNewDiv true ist, wird die neue Komponente angezeigt */}
      <div className={`warenkorbContainer ${showNewDiv ? 'open' : ''}`}>
        <Cart />
      </div>
    </footer>
  );
};


export default Footer;

