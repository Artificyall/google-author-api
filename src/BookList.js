import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import Book from "./Book";

export const BookList = () => {
  const [books, setBooks] = useState([]);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(0);
  const [totalItems, setTotalItems] = useState(-1);

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
      {totalItems >= 0 ? (
        <p className="nbLivres"> {totalItems} résultats trouvés..</p>
      ) : (
        <p className="nbLivres">
          De quel auteur souhaitez vous lire un livre ?
        </p>
      )}
      {books && (
        <>
          <ul>
            {books.map((book) => (
              <li key={book.id}>
                <a href={book.volumeInfo.previewLink}>
                  <Book book={book} />
                </a>
              </li>
            ))}
          </ul>
        </>
      )}
      {totalItems > 0 && (
        <div className="pagination">
          <button disabled={page === 0} onClick={() => setPage(page - 1)}>
            Prev
          </button>
          <p>
            Page {page + 1} / {Math.round(totalItems / 10)} pages
          </p>
          <button
            disabled={page >= totalItems / 10 - 1}
            onClick={() => setPage(page + 1)}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};
