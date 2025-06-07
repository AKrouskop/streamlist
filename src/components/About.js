import React from 'react';
import './MovieSearchPage.css'; // Reuse styling for consistency

const About = () => {
  return (
    <div className="movie-search-container">
      <h2 className="movie-search-title">About StreamList</h2>
      <p style={{ fontSize: '1rem', lineHeight: '1.6', maxWidth: '800px', margin: '0 auto' }}>
        StreamList is a streamlined movie browsing app created as part of a capstone project for the INT 499 course at the University of Arizona Global Campus. 
        It allows users to search for movies using The Movie Database (TMDB) API, view movie details, and add selections to a personal cart. 
        While this project does not process real transactions, it simulates a typical e-commerce flow for streaming subscriptions.
        <br /><br />
        Key features include:
        <ul style={{ textAlign: 'left', margin: '20px auto', maxWidth: '600px' }}>
          <li>Responsive search interface using TMDB API</li>
          <li>Persistent cart functionality with localStorage</li>
          <li>Basic checkout simulation with success messaging</li>
          <li>Modern and mobile-friendly layout</li>
        </ul>
        <br />
        This app was built using <strong>React</strong>, styled with custom CSS, and developed with assistance from AI tools to ensure best practices.
      </p>
    </div>
  );
};

export default About;
