import React from "react"

export const SearchBar = ({ onSubmit }) => {
  const handleSubmit = (event) => {
    event.preventDefault()
    const query = event.target.elements.query.value
    onSubmit(query)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="query" placeholder="Penguinos..." />
    </form>
  )
}
