import React, { useEffect, useState } from "react"
import axios from "axios"
import Book from "./Book"
import { Pagination } from "./Pagination"

export const BookList = ({ query }) => {
  const [books, setBooks] = useState([])
  const [page, setPage] = useState(0)
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
        console.log("Voici l'erreur : ", error)
      })
  }, [query, page])

  return (
    <div className="BookList">
      {totalItems >= 0 ? (
        <p className="nbLivres"> {totalItems} résultat(s) trouvé(s)..</p>
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
      {totalItems > 10 && (
        <Pagination page={page} setPage={setPage} totalItems={totalItems} />
      )}
    </div>
  )
}
