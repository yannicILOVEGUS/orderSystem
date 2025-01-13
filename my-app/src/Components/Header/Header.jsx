import React from 'react';
import './Header.css';

const Header = ({ onResetCategory }) => {
  return (
    <header className="header">
      <div className="logo-container">
        <img src="/assets/Logo.png" alt="logo" className="logo" />
        <span className="header-text">Our Range of Products</span>
      </div>
        <button className="reset-button" onClick={onResetCategory}>
          Back to Categories
        </button>
    </header>
  );
};

export default Header;
