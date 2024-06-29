import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import About from './Components/About';
import Home from './Components/Home';
import Contact from './Components/Contact';
import Navigation from './Components/Navigation';
function App() {
  return (
    <Router>
      <div>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="Home" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
