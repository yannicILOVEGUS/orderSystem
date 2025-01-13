import React from 'react';
import { useLocation } from 'react-router-dom';
import './Header.css';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const Header = ({ onResetCategory, categoryName }) => {
  const location = useLocation();
  const hiddenPaths = ['/checkout', '/order-summary'];
  const shouldHideButton = hiddenPaths.includes(location.pathname);

  return (
    <header className="header">
      <div className="header-actions">
        {!shouldHideButton && (
          <button className="reset-button" onClick={onResetCategory}>
            <ArrowBackIcon className="arrow-icon" />
            Back to Categories
          </button>
        )}
      </div>
      <div className='currentLocation'>
        {/* Dynamischer Kategoriename */}
        <h2>{categoryName}</h2>
      </div>
      <div className="logo-container">
        <img src="/assets/Logo.png" alt="logo" className="logo" />
      </div>
    </header>
  );
};

export default Header;
