import React, { Component } from 'react';
import './App.css';

import Heading from './components/Heading';
import Project from './components/Project';
// import Menu from './components/Menu';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Heading />
        <Project />
        {/* <Menu /> */}
      </div>
    );
  }
}

export default App;
