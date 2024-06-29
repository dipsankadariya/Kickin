import React from 'react';

function Home() {
  return (
    <main className='main container'>
      <div className='content-wrapper'>
        <div className='content'>
          <h1>Kickin' Shoes  Walk the Trend.</h1>
          <h2>Crafting stylish and comfortable footwear for every stride, blending fashion with unbeatable comfort."</h2>
        </div>
        <div className='btn'>
          <button>Get Started</button> 
          <button>Shop</button>
        </div>
      </div>
      <div className='image-container'>
        <img className='image' src='/images/Kickin.webp' alt="Adidas shoes in action" />
      </div>
    </main>
  );
}

export default Home;
