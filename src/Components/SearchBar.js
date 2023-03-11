import React from "react"

export const SearchBar = ({ setQuery, setPage }) => {
  const handleSubmit = (event) => {
    event.preventDefault()
    const query = event.target.elements.query.value
    setQuery(query)
    setPage(0)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="query" placeholder="Penguinos..." />
    </form>
  )
}
