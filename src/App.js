import React, { Component } from 'react';
import './App.css';
import Day from './Day';

class App extends Component {
  render() {
    return (
      <div className="App">
      <h1>The Weather App</h1>
      <Day />
      </div>
    );
  }
}

export default App;