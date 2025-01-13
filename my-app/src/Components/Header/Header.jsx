import React from 'react';
import './Header.css';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const Header = ({ onResetCategory }) => {
  return (
    <header className="header">

      <div className="header-actions">
        <button className="reset-button" onClick={onResetCategory}>
          <ArrowBackIcon className="arrow-icon" />
          Back to Categories
        </button>
      </div>

      <div className="logo-container">
        <img src="/assets/Logo.jpg" alt="logo" className="logo" />
      </div>
    </header>
  );
};

export default Header;
