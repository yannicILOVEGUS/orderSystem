import React from 'react';
import { Link, useLocation  } from 'react-router-dom';


const OrderSummary = () => {
  const location = useLocation();
  const { orderNumber, warenkorb, gesamtPreis } = location.state || {};
  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h2>Thank you for your purchase!</h2>
      <p>Your order number is: {orderNumber}</p>
      <h3>Your Items:</h3>
      <Link to="/">
        <button>Back to Homepage</button>
      </Link>
    </div>
  );
};

export default OrderSummary;
