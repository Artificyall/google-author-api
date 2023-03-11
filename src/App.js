import React, { useState } from "react"
import "./App.css"
import { SearchBar } from "./Components/SearchBar"
import { BookList } from "./Components/BookList"
import { Header } from "./Components/Header"

const App = () => {
  const [query, setQuery] = useState("")
  const [page, setPage] = useState(0)

  return (
    <div className="App">
      <Header />
      <SearchBar setQuery={setQuery} setPage={setPage} />
      <BookList query={query} page={page} setPage={setPage} />
    </div>
  )
}

export default App
