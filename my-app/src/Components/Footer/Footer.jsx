import React, { useState } from "react";
import './Footer.css';
import Cart from "./Cart";

const Footer = () => {
  const [showNewDiv, setShowNewDiv] = useState(false);

  // Funktion zum Umschalten des States
  const toggleNewDiv = () => {
    setShowNewDiv(prevState => !prevState);
  };

  return (
    <footer className="footer">
      <button className="left-button" onClick={toggleNewDiv}>Links</button>
      
      <button className="right-button" onClick={toggleNewDiv}>Open Cart</button> {/* Rechter Button */}

      {/* Wenn showNewDiv true ist, wird die neue Komponente angezeigt */}
      <div className={`warenkorbContainer ${showNewDiv ? 'open' : ''}`}>
        <Cart />
      </div>
    </footer>
  );
};

export default Footer;

