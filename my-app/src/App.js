import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'
import Dog from './Person/Dog'

class App extends Component {
  render() {
      return (
      <div className="App">
       <h1>bla bla alb2</h1>
          <h2>bla2</h2>
          <Person name='Iwo' age='23'/>
          <Person name='Aguska' age='4'/>
          <Dog name='Piesek'>Childrens</Dog>
      </div>
    );
   //return React.createElement('div',{className:'App'},React.createElement('h1',null,'blblblbbl'));
  }
}

export default App;
