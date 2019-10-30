import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      dogPicURL: '',
      dogPicLoaded: false,
      dogPics: [],
      dogPicError: false
    }
  }

  componentDidMount() {
    fetch('https://dog.ceo/api/breeds/list/random/3')
      .then(response => {
        return response.json();
      })
      .then(response => {
        this.setState({
          dogPics: response.message
        })
      })
      .catch(error => {
        this.setState({
          dogPicError: true
        })
      })
  }

  retrieveDogPic = (dog) => {
    fetch(`https://dog.ceo/api/breed/${dog}/images/random`)
      .then(response => {
        return response.json()
      }).then(response => {
        this.setState({
          dogPicURL: response.message,
          dogPicLoaded: true
        })
      })
  }

  render() {
    return (
      <div className="dog-pics-app">
        <h1>Dog Pics!</h1>
        <div>Click the button below to retrieve a dog pic!</div>
        {this.state.dogPics ? (
          this.state.dogPics.map((dog, key) => {
            return (
              <button
                onClick={() => this.retrieveDogPic(dog)}
                className="dog-pics-button"
                key={key}
              >
                {dog}
              </button>
            )
          }))
          : ''
        }
        {this.state.dogPicLoaded && <img src={this.state.dogPicURL} alt="Dog Pic!" />}
      </div>
    );
  }
}

export default App;