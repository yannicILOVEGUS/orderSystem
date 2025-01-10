import React, { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [warenkorb, setCart] = useState([]);

  const hinzufuegen = (produkt) => {
    setCart((prevState) => {
      const existierendesProdukt = prevState.find(item => item.id === produkt.id);
      if (existierendesProdukt) {
        return prevState.map(item =>
          item.id === produkt.id
            ? { ...item, menge: item.menge + 1 }
            : item
        );
      } else {
        return [...prevState, { ...produkt, menge: 1 }];
      }
    });
  };

  const entfernen = (id) => {
    setCart(prevState => prevState.filter(item => item.id !== id));
  };

  const minusProdukt = (id) => {
    setCart((prevState) => {  
      const existierendesProdukt = prevState.find(item => item.id === id);

      if (existierendesProdukt && existierendesProdukt.menge > 1) {
        return prevState.map(item =>
          item.id === id
            ? { ...item, menge: item.menge - 1 }
            : item
        );
      }
      return prevState.filter(item => item.id !== id);
    });
  };
  

  const leeren = () => {
    setCart([]);
  };

  // Gesamtpreis berechnen
  const gesamtPreis = warenkorb.reduce((acc, item) => acc + item.preis * item.menge, 0);

  return (
    <CartContext.Provider value={{ warenkorb, hinzufuegen, entfernen, leeren,minusProdukt, gesamtPreis }}>
      {children}
    </CartContext.Provider>
  );
};
export const useCart = () => useContext(CartContext);
