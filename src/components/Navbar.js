import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import homeIcon from './Logos/home.png';
import movieIcon from './Logos/movie.png';
import cartIcon from './Logos/shopping_cart.png';
import menuIcon from './Logos/menu.png';

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="nav-link">
        <img src={homeIcon} alt="Home" />
        Home
      </Link>
      <Link to="/movies" className="nav-link">
        <img src={movieIcon} alt="Movies" />
        Movies
      </Link>
      <Link to="/cart" className="nav-link">
        <img src={cartIcon} alt="Cart" />
        Cart
      </Link>
      <Link to="/about" className="nav-link">
        <img src={menuIcon} alt="About" />
        About
      </Link>
    </nav>
  );
}

export default Navbar;
