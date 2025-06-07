import React, { useState, useEffect } from 'react';
import './MovieSearchPage.css';

const Cart = ({ setCartCount }) => {
  const [cartItems, setCartItems] = useState([]);
  const [checkoutMessage, setCheckoutMessage] = useState('');

  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      const parsedCart = JSON.parse(savedCart);
      setCartItems(parsedCart);
      setCartCount(parsedCart.length); // Initialize badge on load
    }
  }, [setCartCount]);

  const removeFromCart = (movieId) => {
    const updatedCart = cartItems.filter(item => item.id !== movieId);
    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    setCartCount(updatedCart.length); // Update badge
  };

  const clearCart = () => {
    setCartItems([]);
    localStorage.removeItem('cart');
    setCartCount(0); // Clear badge
  };

  const handleCheckout = () => {
    clearCart();
    setCheckoutMessage('Checkout successful! Thank you for your purchase.');
  };

  return (
    <div className="movie-search-container">
      <h2 className="movie-search-title">Your Cart</h2>

      {checkoutMessage && (
        <p style={{ color: 'green', fontWeight: 'bold', marginBottom: '20px' }}>
          {checkoutMessage}
        </p>
      )}

      {cartItems.length === 0 ? (
        <p>Your cart is empty. Add some movies!</p>
      ) : (
        <>
          <ul className="movie-grid">
            {cartItems.map(movie => (
              <li key={movie.id} className="movie-card cart-shrink">
                <h3 className="movie-title">{movie.title}</h3>
                {movie.poster_path && (
                  <img
                    src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                    alt={movie.title}
                    className="movie-poster small-poster"
                  />
                )}
                <p><strong>Release:</strong> {movie.release_date || 'N/A'}</p>
                <button
                  onClick={() => removeFromCart(movie.id)}
                  className="movie-clear-button"
                  style={{ marginTop: '10px' }}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>

          <button
            onClick={handleCheckout}
            className="movie-search-button"
            style={{ marginTop: '30px' }}
          >
            Checkout
          </button>
        </>
      )}
    </div>
  );
};

export default Cart;
