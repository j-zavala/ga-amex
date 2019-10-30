import React, { Component } from 'react';
import CourseList from './components/CourseList.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App" >
        <CourseList />
      </div>
    );
  }
}

export default App;
