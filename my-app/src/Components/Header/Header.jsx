import React from 'react';
import './Header.css';

const Header = ({ onResetCategory }) => {
  return (
    <header className="header">
      <div className="logo-container">
        <img src="/assets/Logo.jpg" alt="logo" className="logo" />
      </div>
      <div className="header-actions">
        <button className="reset-button" onClick={onResetCategory}>
          Back to Categories
        </button>
      </div>
    </header>
  );
};

export default Header;

