import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  render() {
      return (
      <div className="App">
       <h1>bla bla alb2</h1>
          <h2>bla2</h2>
          <Person/>
      </div>
    );
   //return React.createElement('div',{className:'App'},React.createElement('h1',null,'blblblbbl'));
  }
}

export default App;
