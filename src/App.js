import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';

import { Routing } from './route/Route.js';

class App extends Component {
  render() {
    return (
      <div>
       { Routing() }
      </div>
    );
  }
}

export default App;
