import React, { Component } from 'react';
import './App.css';

//Custom Components
import Book from './Book';
import CreateForm from './CreateForm';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      books: [],
      apiDataLoaded: false,
      author: '',
      title: ''
    }
  }

  componentDidMount() {
    fetch("http://localhost:8081/api/book")
      .then(response => {
        return response.json();
      })
      .then(response => {
        this.setState({
          books: response,
          apiDataLoaded: true
        })
      })
  }

  submitForm = (e) => {
    e.preventDefault();
    fetch("http://localhost:8081/api/book", {
      method: 'post',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        author: this.state.author,
        title: this.state.title
      })
    })
      .then(res => res.json())
      .then(res => {
        let books = this.state.books;
        books.push(res);
        this.setState({
          books: books,
          title: '',
          author: ''
        });
      })
  }

  handleTitleChange = (e) => {
    this.setState({ title: e.target.value })
  }

  handleAuthorChange = (e) => {
    this.setState({ author: e.target.value })
  }

  renderBooks() {
    return this.state.books.map((book, key) => {
      return <Book book={book} key={key} />
    })
  }

  render() {
    return (
      <div className="App">
        {this.state.apiDataLoaded ? this.renderBooks() : <p>Books coming soon!</p>}
        <CreateForm
          title={this.state.title}
          author={this.state.author}
          handleTitleChange={this.handleTitleChange}
          handleAuthorChange={this.handleAuthorChange}
          submitForm={this.submitForm}
        />
      </div>
    );
  }
}

export default App;