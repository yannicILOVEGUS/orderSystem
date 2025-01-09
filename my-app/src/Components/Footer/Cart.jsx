import React from 'react';
import './Cart.css';
import { useCart } from '../Context/CartStoreContext';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { warenkorb, entfernen, leeren, gesamtPreis } = useCart(); // Verwende den Cart Context

  return (
    <div className="warenkorbContent">
      <h2>Warenkorb</h2>
      <div className="warenkorbItems">
        {warenkorb.length === 0 ? (
          <p>Dein Warenkorb ist leer.</p>
        ) : (
          warenkorb.map((item) => (
            <div key={item.id} className="warenkorbItem">
              <div className="itemDetails">
                <div className="itemIcon">{item.icon}</div>
                <div className="itemName">{item.name}</div>
                <div className="itemPrice">{item.preis}€ x {item.menge}</div>
              </div>
              <button onClick={() => entfernen(item.id)} className="removeButton">Entfernen</button>
            </div>
          ))
        )}
      </div>
      {warenkorb.length > 0 && (
        <div className="warenkorbTotal">
          <div className="totalPrice">Gesamt: {gesamtPreis.toFixed(2)}€</div>
          <button onClick={leeren} className="clearCartButton">Warenkorb leeren</button>
        </div>
      )}
      <Link to="/checkout">
        <button>Zum Checkout</button>
      </Link>
    </div>
  );
};

export default Cart;
