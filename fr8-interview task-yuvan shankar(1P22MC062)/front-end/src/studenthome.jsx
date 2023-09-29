import React, {useState, useEffect  } from 'react';
import './App.css';

export default function Studenthome() {
    const [books,setBooks]=useState([]);
  useEffect(() => {
    // Fetch data from your server when the component mounts
    fetch('http://localhost:3001/showbooks')
      .then((response) => response.json())
      .then((data) => setBooks(data))
      .catch((error) => console.error('Error fetching books', error));
  }, []);

  return (
    <div className="App">
      <div>
        <h2>Book List</h2>
        <ul>
        {books.map((book) => (
          <li key={book._id}>{book.title} by {book.description}</li>
        ))}
      </ul>
      </div>
      <a href="/">Back to main</a>
    </div>
  );
}
