import React, { useState } from 'react';
import './MovieSearchPage.css'; // Make sure this file exists

const Movies = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState(() => {
    const saved = localStorage.getItem('movieSearchResults');
    return saved ? JSON.parse(saved) : [];
  });
  const [searched, setSearched] = useState(false); // NEW STATE

  const handleSearch = async () => {
    if (!query) return;

    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=56b92772faf635d8d434eaa65ef25eef&query=${encodeURIComponent(query)}`
    );
    const data = await response.json();

    setMovies(data.results);
    localStorage.setItem('movieSearchResults', JSON.stringify(data.results));
    setSearched(true); // MARK THAT SEARCH HAPPENED
  };

  const handleClear = () => {
    setMovies([]);
    setQuery('');
    localStorage.removeItem('movieSearchResults');
    setSearched(false); // RESET FLAG
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
        />
        <button onClick={handleSearch} className="movie-search-button">
          Search
        </button>
        <button onClick={handleClear} className="movie-clear-button">
          Clear Results
        </button>
      </div>

      {/* Display if there are results */}
      {movies.length > 0 && (
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
            </li>
          ))}
        </ul>
      )}

      {/* Show message if nothing was found */}
      {searched && movies.length === 0 && (
        <p style={{ marginTop: '20px', color: 'red' }}>
          No movies or shows found with that title. Please try a different search.
        </p>
      )}
    </div>
  );
};

export default Movies;
