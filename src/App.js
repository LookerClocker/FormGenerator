import React, { Component } from 'react';
import FormGenerate from './FormGenerator'
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        {<FormGenerate/>}
      </div>
    );
  }
}

export default App;
