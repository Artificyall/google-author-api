import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import Book from "./Book";

export const BookList = () => {
  const [books, setBooks] = useState([]);
  const [query, setQuery] = useState("penguinos");

  useEffect(() => {
    if (!query) return;
    axios
      .get(`https://www.googleapis.com/books/v1/volumes?q=inauthor:${query}`)
      .then((response) => {
        setBooks(response.data.items);
      })
      .catch((error) => {});
  }, [query]);

  return (
    <div className="App">
      <form
        onSubmit={(event) => {
          event.preventDefault();
          setQuery(event.target.elements.query.value);
        }}
      >
        <input type="text" name="query" placeholder="Penguinos..." />
        <button type="submit">Rechercher</button>
      </form>
      {books && (
        <ul>
          {books.map((book) => (
            <li key={book.id}>
              <Book book={book} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
