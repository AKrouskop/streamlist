import React, { useState } from 'react';

function StreamList() {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim() !== '') {
      console.log(`User input: ${input}`);
      setInput('');
    }
  };

  return (
    <div className="streamlist-container">
      <h2>Welcome to StreamList</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter a movie or show"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">Add to List</button>
      </form>
    </div>
  );
}

export default StreamList;
