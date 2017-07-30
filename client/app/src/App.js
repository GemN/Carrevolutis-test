import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FindNextPrime from './components/FindNextPrime/index'

class App extends Component {
  render() {
    return (
      <div className="App">
          <div className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h2>Welcome to Carrevolutis Client Fullstack test</h2>
          </div>
          <FindNextPrime />
      </div>
    );
  }
}

export default App;
