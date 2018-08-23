import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {TaskBox} from './components/TaskBox/TaskBox.js'



class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">GET IT DONE!!</h1>
        </header>
        <p className="App-intro">
          Your To-do manager.
        </p>
        <TaskBox />
      </div>
    );
  }
}

export default App;
