import React from 'react'

function Navigation() {
  return (
    <nav className='container'>
      <div className="img-logo">
        <img src='/images/logogo.jpeg' alt='logo' className='logo'></img>
      </div>
      <ul>
        <li><a href="#">Menu</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
     
      </ul>
      <div className="nav-right">
        <button>Login</button>
      </div>
    </nav>
    
  );
}

export default Navigation;
