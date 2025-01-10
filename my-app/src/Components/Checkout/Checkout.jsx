import React from 'react';
import { useNavigate } from 'react-router-dom'; // Verwende useNavigate anstelle von useHistory

const Checkout = () => {
  const navigate = useNavigate(); // useNavigate statt useHistory

  const handlePayment = () => {
    navigate('/');
  };

  return (
    <div>
      <h2>Checkout</h2>
      <p>Hier kannst du deine Bestellung abschließen.</p>
      {/* Weitere Details, wie die Bestellung zusammenfassen, etc. */}
      <button onClick={handlePayment}>Zahlung abschließen</button>
    </div>
  );
};

export default Checkout;
