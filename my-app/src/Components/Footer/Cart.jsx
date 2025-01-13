import React from 'react';
import './Cart.css';
import { useCart } from '../Context/CartStoreContext';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { warenkorb, entfernen, leeren, gesamtPreis,hinzufuegen,minusProdukt } = useCart(); // Verwende den Cart Context
  return (
    <div className="warenkorbContent">
      <h2>Warenkorb</h2>
      <div className="warenkorbItems">
        {warenkorb.length === 0 ? (
          <p>Dein Warenkorb ist leer.</p>
        ) : (
          warenkorb.map((item) => (
            <div key={item.id} className="warenkorbItem">
             <div className='itemDetails'>
                <div className="itemInfo">
                    <div className="itemIcon">{item.icon}</div>
                    <div className="itemName">{item.name}</div>
                    <div className="itemPrice">{(item.preis * item.menge).toFixed(2)}€</div>
                </div>
                <div className='itemControll'>
                    <button className='minusButton' aria-label="Menge reduzieren" onClick={() => minusProdukt(item.id)}><img  src="/paymentIcon/minus.png" ></img></button>
                    <span>{item.menge}</span>
                    <button className='addProdukt' aria-label="Menge erhöhen" onClick={() => hinzufuegen(item)}><img  src="/paymentIcon/plus.png" ></img></button>
                </div>
            </div>
            </div>
          ))
        )}
        {warenkorb.length > 0 && (
        <div className="warenkorbTotal">
          <button onClick={leeren} className="clearCartButton">Warenkorb leeren</button>
        </div>
      )}
      </div>
      <div className="totalPrice">Total: {gesamtPreis.toFixed(2)}€</div>
      {warenkorb.length > 0 && (
        <Link to="/checkout">
          <button className="checkoutButton">Proceed to Checkout</button>
        </Link>
      )}
    </div>
  );
};

export default Cart;
