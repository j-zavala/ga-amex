import React, { Component } from 'react';
import './App.css';
import Mood from './Mood';

class App extends Component {
  // What will happen when the component is first created
  constructor(props) {
    // Make call to parent class (Component) constructor
    super(props);

    this.state = {
      moodPoints: 1,// initialize this.state.moodPoints
      mood: "sad"
    }

    // binds changeMood to it's local context
    this.changeMood = this.changeMood.bind(this);
    this.increaseMood = this.increaseMood.bind(this);
    this.decreaseMood = this.decreaseMood.bind(this);
  }

  changeMood(e) {
    const newMoodPoints = prompt("How are you feeling (1-10)?");
    this.setState({
      moodPoints: parseInt(newMoodPoints, 10)
    })
  }

  increaseMood(e) {
    if (this.state.moodPoints === 10) {
      this.setState({
        moodPoints: 0
      })
    } else {
      this.setState({
        moodPoints: this.state.moodPoints + 1
      })
    }
  }

  decreaseMood(e) {
    if (this.state.moodPoints === 0) {
      this.setState({
        moodPoints: 0
      })
    } else {
      this.setState({
        moodPoints: this.state.moodPoints - 1
      })
    }
  }



  render() {
    return (
      <div className="App">
        <p>Hello, world! You have {this.state.moodPoints} moodPoints!</p>
        <Mood
          decreaseMood={this.decreaseMood}
          increaseMood={this.increaseMood}
          changeMood={this.changeMood}
          mood={this.state.mood}
          moodPoints={this.state.moodPoints}
        />
      </div>
    );
  }
}

export default App;