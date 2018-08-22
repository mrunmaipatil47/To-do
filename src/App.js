import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStroopwafel } from '@fortawesome/free-solid-svg-icons'

library.add(faStroopwafel)

class Task extends Component {
  render() {
    const item = this.props.item

    return (<div>
      <span>
        <li>{item}</li>
      </span>
    </div>)
  }
}

class TaskList extends Component {
  render() {
    console.log("TaskList props = " + this.props)
    return (
      <ul>
        <Task item={this.props.tasks} />
      </ul>
    )
  }
}

class TaskBox extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: "",
      tasks: ["task 1", "task 2"]
    }

    this.handleKeyPress = this.handleKeyPress.bind(this)
  }

  handleKeyPress = (event) => {
    event.preventDefault();
    this.setState({ value: event.target.value })
    if (event.Key === 'Enter') {
      this.setState(prevState => ({
        tasks: [...prevState.tasks, this.state.value]
      }))
      this.setState({ value: " " })
    }
  }

  render() {
    console.log("TaskBox State = " + this.state)
    return (
      <div>
        <input value={this.state.value} onChange={this.handleKeyPress}></input>
        <TaskList task={this.state.value} />
      </div>
    )

  }
}

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
