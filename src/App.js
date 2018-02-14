import React, { Component } from 'react';
import './App.css';

import Heading from './components/Heading';
import Projects from './components/Projects';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Heading />
        <Projects />
        <Footer />
      </div>
    );
  }
}

export default App;
