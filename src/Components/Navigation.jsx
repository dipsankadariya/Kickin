import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <nav className='container'>
      <div className="img-logo">
        <img src='/images/logogo.jpeg' alt='logo' className='logo' />
      </div>
      <ul>
        <li><Link to="/Home">Home</Link></li>
        <li><Link to="/About">About</Link></li>
        <li><Link to="/Contact">Contact</Link></li>
      </ul>
      <div className="nav-right">
        <button>Login</button>
      </div>
    </nav>
  );
}

export default Navigation;
