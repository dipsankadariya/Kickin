import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from './CartContext';

function Navigation() {
  const { cart } = useCart();

  return (
    <nav className='container'>
      <div className="img-logo">
        <img src='/images/logogo.jpeg' alt='logo' className='logo' />
      </div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/cart">Cart ({cart.length})</Link></li>
      </ul>
    </nav>
  );
}

export default Navigation;