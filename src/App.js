import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    persons: [
      { name:'Manu', age:29 },
      { name:'Max', age:28 }
    ]
  }

  switchNameHandler = (newName) => {
    this.setState( {
      persons: [
        { name:newName, age:29 },
        { name:'Max', age:28 }
      ]
    })
  }

  nameChangedHandler = (event) => {
    this.setState( {
      persons: [
        { name: 'Manu', age:29 },
        { name: event.target.value, age:28 }
      ]
    })
  }

  render() {

    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React app</h1>
        <button 
          style={style}
          onClick={this.switchNameHandler.bind(this, 'Maximilian!')}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}  click={this.switchNameHandler.bind(this, 'Max!')}/>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age} changed={this.nameChangedHandler}>My Hobbies: Racing</Person>
      </div>
    );
  }
  
}

export default App;
