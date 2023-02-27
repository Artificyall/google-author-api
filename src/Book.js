import React from "react";
import "./Book.css";
import { GiSecretBook } from "react-icons/gi";

export default function Book({ book }) {
  return (
    <div className="book-box">
      <h2>{book.volumeInfo.title}</h2>
      <p>{book.volumeInfo.authors}</p>
      {book.volumeInfo.imageLinks ? (
        <img src={book.volumeInfo.imageLinks.thumbnail} alt="" />
      ) : (
        <GiSecretBook size={150} />
      )}
    </div>
  );
}
