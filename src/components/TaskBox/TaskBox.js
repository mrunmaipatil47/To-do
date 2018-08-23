import React, { Component } from 'react';
import {TaskList} from '../TaskList/TaskList.js'
import './TaskBox.css'

export class TaskBox extends Component {
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
          <input className="taskBoxInput" value={this.state.inputValue} onChange={this.handleChange} onKeyPress={this.handleKeyPress}></input>
          <TaskList tasks={this.state.tasks} />
        </div>
      )
  
    }
  }
