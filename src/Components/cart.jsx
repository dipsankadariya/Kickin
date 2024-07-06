import React from 'react';
import { useCart } from './CartContext';
import './shop.css'; 

function Cart() {
  const { cart } = useCart();

  return (
    <div className="cart-container-custom">
      <h1 className="intro">Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="category-grid-custom">
          {cart.map((item, index) => (
            <div key={index} className="category-card-custom">
              <img src={item.image} alt={item.title} className="category-image-custom" />
              <div className="category-info-custom">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Cart;