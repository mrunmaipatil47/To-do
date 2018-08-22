import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

library.add(faCheck)

const Task = (item, index) => (
  <span key={index}>
    <li>{item}</li>
    <FontAwesomeIcon icon="check"/>
  </span>
)

class TaskList extends Component {
  render() {
    const tasks = this.props.tasks.map(Task)
    return (
      <ul>
        {tasks}
      </ul>
    )
  }
}

class TaskBox extends Component {
  constructor(props) {
    super(props)
    this.state = {
      inputValue: " ",
      tasks: []
    }

    this.handleKeyPress = this.handleKeyPress.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleKeyPress = (event) => {
    if(event.key === 'Enter') {
      this.setState(prevState => ({
        tasks: [...prevState.tasks, this.state.inputValue],
        inputValue: ' '
      }))
    }
  }

  handleChange = (event) => {
    this.setState({
      inputValue : event.target.value
    })
  }

  render() {
    // console.log("TaskBox State = " + this.state.tasks)
    return (
      <div>
        <input value={this.state.inputValue} onChange={this.handleChange} onKeyPress={this.handleKeyPress}></input>
        <TaskList tasks={this.state.tasks} />
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
