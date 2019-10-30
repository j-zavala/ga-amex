import React, {Component} from 'react';
import './App.css';
import DogPics from './DogPics';

class App extends Component {
  constructor() {
    super();

    this.state = {
      selectedFeature: null
    }
  }

  updateSelectedFeature = (e) => {
    this.setState({ selectedFeature: e.currentTarget.value });
  };

  render() {
    return (
      <div className="practice-app">
        <h1>The App-picker App!</h1>
        <label htmlFor="feature-select">Select a feature!</label>
        <select id="feature-select" onChange={this.updateSelectedFeature}>
          <option>Select One!</option>
          <option value="dog-pics">Dog pics app</option>
          <option value="homework">Homework app</option>
        </select>
        <div className="feature-section">
          {this.state.selectedFeature === 'dog-pics' &&
            <DogPics />
          }
          {this.state.selectedFeature === 'homework' &&
            <div>
              <img src="http://www.animatedgif.net/underconstruction/anim0205-1_e0.gif" alt="Under Construction"/>
              <h1>Coming Soon!</h1>
            </div>
          }
        </div>
      </div>
    )
  };
}


export default App;
