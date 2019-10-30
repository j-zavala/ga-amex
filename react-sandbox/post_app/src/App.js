import React, { Component } from 'react';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>{this.props.title}</h1>
        <h1>{this.props.author}</h1>
        <h1>{this.props.body}</h1>
      </div>
    )
  }
}

export default App;