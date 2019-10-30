import React, { Component } from 'react';
import './App.css';
import FilmListing from './FilmListing';
import FilmDetails from './FilmDetails';
import TMDB from './TMDB'

class App extends Component {

  render() {
    return (
      <div className="App">
        {TMDB.films.map((film, key) => {
          return (
            <div className="film-library" key={key}>
              <FilmListing film={film} />
              <FilmDetails film={film} />
            </div>
          )
        })};
      </div>
    )
  }
}

export default App;
