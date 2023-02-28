import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import Book from "./Book";

export const BookList = () => {
  const [books, setBooks] = useState([]);
  const [query, setQuery] = useState("penguinos");
  const [page, setPage] = useState(0);
  const [totalItems, setTotalItems] = useState(0);

  useEffect(() => {
    if (!query) return;
    axios
      .get(
        `https://www.googleapis.com/books/v1/volumes?q=inauthor:${query}&startIndex=${
          page * 10
        }`
      )
      .then((response) => {
        setBooks(response.data.items);
        setTotalItems(response.data.totalItems);
      })
      .catch((error) => {});
  }, [query, page]);

  /*        <button type="submit">Rechercher</button> */

  return (
    <div className="App">
      <form
        onSubmit={(event) => {
          event.preventDefault();
          setQuery(event.target.elements.query.value);
          setPage(0);
        }}
      >
        <input type="text" name="query" placeholder="Penguinos..." />
      </form>
      {books && (
        <ul>
          {books.map((book) => (
            <li key={book.id}>
              <a href={book.volumeInfo.previewLink}>
                <Book book={book} />
              </a>
            </li>
          ))}
        </ul>
      )}
      <div className="pagination">
        <button disabled={page === 0} onClick={() => setPage(page - 1)}>
          Prev
        </button>
        <p>
          Page {page + 1} / {totalItems} books
        </p>
        <button onClick={() => setPage(page + 1)}>Next</button>
      </div>
    </div>
  );
};
