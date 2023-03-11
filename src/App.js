import React, { useState } from "react"
import "./App.css"
import { SearchBar } from "./Components/SearchBar"
import { BookList } from "./Components/BookList"
import { Header } from "./Components/Header"

const App = () => {
  const [query, setQuery] = useState("")
  const [page, setPage] = useState(0)

  const resetPage = () => {
    setPage(0)
  }

  const handleSubmit = (query) => {
    setQuery(query)
    resetPage()
  }

  return (
    <div className="App">
      <Header />
      <SearchBar onSubmit={handleSubmit} />
      <BookList query={query} page={page} />
    </div>
  )
}

export default App
