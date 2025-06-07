import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import homeIcon from './Logos/home.png';
import movieIcon from './Logos/movie.png';
import cartIcon from './Logos/shopping_cart.png';
import menuIcon from './Logos/menu.png';
import searchIcon from '../components/Logos/search.png';

function Navbar({ cartCount }) {
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

      <Link to="/cart" className="nav-link cart-link">
        <div className="cart-icon-wrapper">
          <img src={cartIcon} alt="Cart" />
          {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
        </div>
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
