import React, { Component } from 'react';
import "./Stopwatch.css"

class Stopwatch extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
      isPaused: false
    }

    // this.handleStart = this.handleStart.bind(this);
    // this.updateCounter = this.updateCounter.bind(this);
    // this.pauseCounter = this.pauseCounter.bind(this);
    //this.handleState = this.handhandleStateleStart.bind(this);
    this.updateState = this.updateState.bind(this);
    this.handleStart = this.handleStart.bind(this);
    this.timer = this.timer.bind(this);
    this.setPause = this.setPause.bind(this);
  }

  pauseCounter() {

  }

  updateCounter() {
    // this.setState({ counter: ++this.state.counter });
  }

  setPause() {

    this.setState({ isPaused: true })
    this.updateState();
  }

  timer() {
    console.log(this.state.isPaused)
    setInterval(() => this.setState({ counter: (!this.state.isPaused) ? ++this.state.counter : this.state.counter }), 1000);
  }

  updateState(e) {
    clearInterval(this.timer)
    console.log(e.target)
    if (e.target.innerHTML === "Start") {
      this.setState({ isPaused: false })
    } else {
      this.setState({ isPaused: true })
    }
    this.timer();
    //let timer = setInterval(() => this.setState({ counter: ++this.state.counter }), 1000);
    // if (e.target.innerHTML === "Pause") {
    //   console.log("PAUSE")
    //   clearInterval(this.timer);
    // }
    // let timer;
    // if (e.target.innerHTML === "Start") {
    //   timer = setInterval(() => this.setState({ counter: ++this.state.counter }), 1000)
    // }
    // else {
    //   console.log(timer)
    //   clearInterval(timer)
    // }
    // let status = !this.state.isPaused ? this.setState({ counter: ++this.state.counter }) : this.setState({ counter: this.state.counter });
    // return status;
  }


  handleStart() {
    setInterval(this.updateState, 1000);
  }

  render() {
    return (
      <div className="stopwatch">
        <h1>{this.state.counter}</h1>
        <div className="controls">
          <button>Reset</button>
          <button onClick={this.updateState}>Start</button>
          <button onClick={this.updateState}>Pause</button>
        </div>
      </div>
    );
  }
}

export default Stopwatch;
