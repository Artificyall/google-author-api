import React from "react"

export const Pagination = ({ page, setPage, totalItems }) => {
  return (
    <div className="pagination">
      <button disabled={page === 0} onClick={() => setPage(page - 1)}>
        Prev
      </button>
      <p>
        Page {page + 1} / {Math.ceil(totalItems / 10)} pages
      </p>
      <button
        disabled={page >= totalItems / 10 - 1}
        onClick={() => setPage(page + 1)}
      >
        Next
      </button>
    </div>
  )
}
