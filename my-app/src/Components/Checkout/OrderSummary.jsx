import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './OrderSummary.css';

const OrderSummary = ({ onResetCategory }) => {
  const location = useLocation();
  const { orderNumber, warenkorb, gesamtPreis } = location.state || {};

  return (
    <div className='OrderSummaryContainer'>
      <h2>Thank you for your purchase!</h2>
      <p>Your order number is: <span className='highlight'>{orderNumber}</span></p>
      <h3>Your Items:</h3>
      <ul className='itemList'>
        {warenkorb && warenkorb.map((item, index) => (
          <li key={index} className='item'>
            <span>{item.name}</span> <span>{item.menge}</span> <span>{(item.preis * item.menge).toFixed(2)} €</span>
          </li>
        ))}
      </ul>
      <p className='totalPrice'>Total Price: <span className='highlight'>{(gesamtPreis).toFixed(2)} €</span></p>
      <Link to="/">
        <button className='backButton' onClick={onResetCategory}>Back to Homepage</button>
      </Link>
    </div>
  );
};

export default OrderSummary;