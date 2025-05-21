import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './StreamList.css';
import checkIcon from './Logos/check.png';      // complete
import deleteIcon from './Logos/delete.png';    // delete
import editIcon from './Logos/edit.png';        // edit

function StreamList() {
  const [input, setInput] = useState('');
  const [list, setList] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [currentId, setCurrentId] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim() === '') return;

    if (isEditing) {
      setList(
        list.map((item) =>
          item.id === currentId ? { ...item, name: input } : item
        )
      );
      setIsEditing(false);
      setCurrentId(null);
    } else {
      const newItem = {
        id: uuidv4(),
        name: input,
        completed: false,
      };
      setList([...list, newItem]);
    }

    setInput('');
  };

  const handleDelete = (id) => {
    setList(list.filter((item) => item.id !== id));
  };

  const handleEdit = (id) => {
    const itemToEdit = list.find((item) => item.id === id);
    setInput(itemToEdit.name);
    setIsEditing(true);
    setCurrentId(id);
  };

  const handleComplete = (id) => {
    setList(
      list.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
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
        <button type="submit">{isEditing ? 'Update' : 'Add to List'}</button>
      </form>

      <ul className="streamlist">
        {list.map((item) => (
          <li key={item.id} className={item.completed ? 'completed' : ''}>
            {item.name}
            <div className="actions">
              <img
                src={checkIcon}
                alt="Complete"
                title="Mark as Complete"
                onClick={() => handleComplete(item.id)}
              />
              <img
                src={editIcon}
                alt="Edit"
                title="Edit"
                onClick={() => handleEdit(item.id)}
              />
              <img
                src={deleteIcon}
                alt="Delete"
                title="Delete"
                onClick={() => handleDelete(item.id)}
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default StreamList;

