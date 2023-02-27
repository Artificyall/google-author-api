import React from 'react';
import axios from 'axios';
import './App.css';

export default class BookList extends React.Component {
  state = {
    books: []
  }

  componentDidMount() {
    axios.get(`https://www.googleapis.com/books/v1/volumes?q=the lord of the rings+inauthor:tolkien&maxResults=40`)
      .then(res => {
        const books = res.data.items;
        this.setState({ books });
        console.log(books);
      })
  }

  render() {
    return (
      <ul>
        {
          this.state.books
            .map(book =>
              <li key={book.id}>{book.volumeInfo.title}</li>
            )
        }
      </ul>
    )
  }
}