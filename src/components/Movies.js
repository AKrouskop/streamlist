import React, { useState, useEffect } from 'react';
import './MovieSearchPage.css';

// It's recommended to use environment variables for API keys
// For example, if using Create React App or a similar tool:
// const API_KEY = process.env.REACT_APP_TMDB_API_KEY;
// For this example, we'll keep it here but strongly advise using env vars in production.
const API_KEY = '56b92772faf635d8d434eaa65ef25eef'; // ⚠️ Consider using environment variables

const Movies = ({ setCartCount }) => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState(() => { // Corrected: Removed extra parentheses
    const saved = localStorage.getItem('movieSearchResults');
    return saved ? JSON.parse(saved) : [];
  });
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });
  const [searched, setSearched] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
    setCartCount(cart.length);
  }, [cart, setCartCount]);

  const handleSearch = async () => {
    if (!query) return;

    setLoading(true);
    setError(null);

    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      setMovies(data.results);
      localStorage.setItem('movieSearchResults', JSON.stringify(data.results));
      setSearched(true);
    } catch (err) {
      console.error("Failed to fetch movies:", err);
      setError("Failed to fetch movies. Please try again.");
      setMovies([]);
    } finally {
      setLoading(false);
    }
  };

  const handleClear = () => {
    setMovies([]);
    setQuery('');
    localStorage.removeItem('movieSearchResults');
    setSearched(false);
    setError(null);
  };

  const handleAddToCart = (movie) => {
    const alreadyInCart = cart.some((item) => item.id === movie.id);
    if (!alreadyInCart) {
      const updatedCart = [...cart, movie];
      setCart(updatedCart);
    }
  };

  return (
    <div className="movie-search-container">
      <h2 className="movie-search-title">Search for a Movie</h2>

      <div className="movie-search-bar">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="movie-search-input"
          placeholder="Type a movie title..."
          disabled={loading}
        />
        <button onClick={handleSearch} className="movie-search-button" disabled={loading}>
          {loading ? 'Searching...' : 'Search'}
        </button>
        <button onClick={handleClear} className="movie-clear-button" disabled={loading}>
          Clear Results
        </button>
      </div>

      {error && (
        <p style={{ marginTop: '20px', color: 'red' }}>
          {error}
        </p>
      )}

      {loading && (
        <p style={{ marginTop: '20px' }}>Loading...</p>
      )}

      {!loading && !error && movies.length > 0 && (
        <ul className="movie-grid">
          {movies.map((movie) => (
            <li key={movie.id} className="movie-card">
              <h3 className="movie-title">{movie.title}</h3>
              {movie.poster_path && (
                <img
                  src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                  alt={movie.title}
                  className="movie-poster"
                />
              )}
              <p><strong>Release:</strong> {movie.release_date || 'N/A'}</p>
              <p>{movie.overview || 'No description available.'}</p>
              <button onClick={() => handleAddToCart(movie)} className="movie-search-button" style={{ marginTop: '10px' }}>
                Add to Cart
              </button>
            </li>
          ))}
        </ul>
      )}

      {!loading && !error && searched && movies.length === 0 && (
        <p style={{ marginTop: '20px', color: 'red' }}>
          No movies or shows found with that title. Please try a different search.
        </p>
      )}
    </div>
  );
};

export default Movies;
