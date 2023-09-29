import React, { useState, useEffect  } from 'react';
import axios from "axios";
import './App.css';

export default function Adminhome() {
const [books,setBooks]=useState([]);
  const [newBook, setNewBook] = useState('');
  const [description,setDescription]= useState('');

  const handleAddBook = () => {
    axios.post("http://localhost:3001/addbook", { newBook, description })
      .then((response) => {
        console.log(response.data);
        alert(response.data.message);
        setNewBook('');
        setDescription('');
      })
      .catch((error) => {
        console.error(error);
      });
    };
  useEffect(() => {
    // Fetch data from your server when the component mounts
    fetch('http://localhost:3001/showbooks')
      .then((response) => response.json())
      .then((data) => setBooks(data))
      .catch((error) => console.error('Error fetching books', error));
  }, [books]);


  const handleDeleteBook = (bookId) => {
    axios.delete(`http://localhost:3001/deletebook/${bookId}`)
      .then((response) => {
        console.log(response.data);
        // Remove the deleted book from the state
        setBooks(books.filter((book) => book._id !== bookId));
      })
      .catch((error) => {
        console.error(error);
      });
  };
  

  return (
    <div className="App">
      <h1>Library Management System</h1>
      <h1>Welcome admin</h1>
      <div>
        <input
          type="text"
          placeholder="Enter a new book title"
          value={newBook}
          onChange={(e) => setNewBook(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter a new book description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button onClick={handleAddBook}>Add Book</button>
      </div>
      <div>
        <h2>Book List</h2>
        {books.map((book) => (
          <div key={book._id}><p className='bookname'>Book name:{book.title}</p>
          <p className='description'>Description:{book.description}</p>
          <button onClick={() => handleDeleteBook(book._id)}>Delete</button>
          </div>
        ))}
      <a href="/">Back to main</a>
      </div>
    </div>
  );
}

