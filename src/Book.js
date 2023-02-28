import React from "react";
import "./Book.css";
import { GiSecretBook } from "react-icons/gi";

export default function Book({ book }) {
  return (
    <div className="book-box">
      <div className="parent">
        <h2 className="title">{book.volumeInfo.title.slice(0, 10) + "..."}</h2>
        <p className="desc">
          {book.volumeInfo.description &&
            book.volumeInfo.description?.slice(0, 130) + "..."}
        </p>
        {book.volumeInfo.imageLinks ? (
          <img
            className="image"
            src={book.volumeInfo.imageLinks.thumbnail}
            alt=""
          />
        ) : (
          <GiSecretBook className="image" size={150} />
        )}
      </div>
    </div>
  );
}
