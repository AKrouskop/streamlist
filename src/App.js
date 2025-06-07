import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import StreamList from './components/StreamList';
import Movies from './components/Movies';
import Cart from './components/Cart';
import About from './components/About';

function App() {
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCartCount(storedCart.length);
  }, []);

  return (
    <Router>
      <Navbar cartCount={cartCount} />
      <div className="content">
        <Routes>
          <Route path="/" element={<StreamList />} />
          <Route path="/movies" element={<Movies setCartCount={setCartCount} />} />
          <Route path="/cart" element={<Cart setCartCount={setCartCount} />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
