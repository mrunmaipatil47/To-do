import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core'
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
    console.log("TaskList props = " + this.props.task)
    return (
      <div>
        <Task item={this.props.task} />
      </div>
    )
  }
}

class TaskBox extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: " ",
      tasks: []
    }

    this.handleKeyPress = this.handleKeyPress.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleKeyPress = (event) => {
    event.preventDefault();
    if(event.Key === "Enter") {
      this.setState(prevState => ({
        tasks: [...prevState.tasks, this.state.value]
      }))
      this.setState({ value: " " })
    }
  }

  handleChange = (event) => {
    event.preventDefault();
    this.setState({
      value : this.state.value
    })
  }

  render() {
    console.log("TaskBox State = " + this.state.tasks)
    return (
      <div>
        <input value={this.state.value} onChange={this.handleChange} onKeyPress={this.handleKeyPress}></input>
        <TaskList task={this.state.tasks} />
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
