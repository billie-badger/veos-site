import React, { Component } from 'react';

import './App.css';

import Home from './routes/Home';
import About from './routes/About';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Home />
      </div>
    );
  }
}

export default App;
