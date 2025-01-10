// src/Context/PaymentContext.js
import React, { createContext, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from './CartStoreContext';

const PaymentContext = createContext();


export const PaymentProvider = ({ children }) => {
  const navigate = useNavigate();
  const { warenkorb, gesamtPreis, leeren } = useCart();
  const handlePaymentMethod = () => {
  
    console.log('Zahlung erfolgreich');
    return true; 
  };

  const handleCheckout = () => {
    if(handlePaymentMethod()){
        const orderNumber = Math.floor(Math.random() * 1000000); 
        navigate("/order-summary", { state: { orderNumber, warenkorb, gesamtPreis } });
        leeren();
    }
  };

  return (
    <PaymentContext.Provider value={{ handlePaymentMethod, handleCheckout }}>
      {children}
    </PaymentContext.Provider>
  );
};

// Verwende den Context in einer Komponente
export const usePayment = () => useContext(PaymentContext);
