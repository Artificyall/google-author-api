import React, { useEffect, useState } from "react"
import axios from "axios"
import Book from "./Book"
import { Pagination } from "./Pagination"

export const BookList = ({ query, setPage, page }) => {
  const [books, setBooks] = useState([])
  const [totalItems, setTotalItems] = useState(-1)

  useEffect(() => {
    if (!query) return
    axios
      .get(
        `https://www.googleapis.com/books/v1/volumes?q=inauthor:${query}&startIndex=${
          page * 10
        }`
      )
      .then((response) => {
        setBooks(response.data.items)
        setTotalItems(response.data.totalItems)
      })
      .catch((error) => {
        console.log("Erreur : ", error)
      })
  }, [query, page])

  return (
    <div className="book-list">
      {totalItems >= 0 ? (
        <p className="nb-livres">{totalItems} résultat(s) trouvé(s)..</p>
      ) : (
        <p className="nb-livres">
          De quel auteur souhaitez-vous lire un livre ?
        </p>
      )}
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
      {totalItems > 10 && (
        <Pagination page={page} setPage={setPage} totalItems={totalItems} />
      )}
    </div>
  )
}
