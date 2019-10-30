import React from 'react';
import './App.css';
import Greeting from './Greeting';
import Header from './Header';

let tabs = ["People", "Animals"]

function App() {
  return (
    <div className="App">
      <Greeting name={"Casey"} />
      <Header tabs={tabs} />
    </div>
  );
}

export default App;
