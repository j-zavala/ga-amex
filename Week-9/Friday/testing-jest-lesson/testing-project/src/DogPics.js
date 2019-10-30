import React, {Component} from 'react';
import './App.css';

class DogPics extends Component {
  constructor() {
    super();
    
    this.state = {
      initialBreeds: [],
      dogPicURL: '',
    }
  }

  componentDidMount() {
    fetch('https://dog.ceo/api/breeds/list/random/3')
      .then(res => res.json())
      .then(data => this.setState({ initialBreeds: data.message }))
      .catch(err => console.log(err));
  }


  retrieveDogPic = (breed) => {
    fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
      .then(res => res.json())
      .then(data => this.setState({ dogPicURL: data.message }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="dog-pics-app">
        <h1>Dog Pics!</h1>
        <div>Choose one of the three breeds below!</div>
        {this.state.initialBreeds.map((breed, index) => (
          <button
            onClick={() => this.retrieveDogPic(breed)}
            className="dog-pics-button"
            key={`breed-button-${index}`}
          >
            {breed}
          </button>
        ))}
        <img src={this.state.dogPicURL} alt="Dog Pic!"/>
      </div>
    );
  }
}

export default DogPics;
