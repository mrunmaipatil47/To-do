import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import './TaskList.css'

library.add(faCheck)
library.add(faTrash)

class Task extends Component {
    constructor(props) {
        super(props)
        this.state = {
            checked: false,
            trashed: false,
            classes: ['task']
        }
        this.handleCheck = this.handleCheck.bind(this)
        this.handleTrash = this.handleTrash.bind(this)
    }

    handleCheck = (event) => {
        event.preventDefault()
        this.setState({ checked : true });
        this.setState(prevState => ({
            classes: [...prevState.classes, 'checked'],
          }))
        // if (this.state.checked === true) {
        //     if (this.state.classes.indexOf('checked') != -1) {
        //         this.setState(prevState => ({
        //             classes: [...prevState.classes, 'checked'],
        //         }))
        //     }
        // }
    }

    handleTrash = (event) => {
        event.preventDefault()
        this.setState({ trashed: true })
        this.setState(prevState => ({
            classes: [...prevState.classes, 'trashed'],
          }))
        // if (this.state.trashed === true) {
        //     if (this.state.classes.indexOf('trashed') != -1) {
        //         this.setState(prevState => ({
        //             classes: [...prevState.classes, 'trashed'],
        //         }))
        //     }
        // }
    }

    render() {
        return (
            <div className={this.state.classes.join(' ')}>
                <span key={this.props.index}>
                    <li>{this.props.item}</li>
                    <div className="icons">
                        <span onClick={this.handleCheck} >
                            <FontAwesomeIcon icon="check" />
                        </span>
                        <span onClick={this.handleTrash}>
                            <FontAwesomeIcon icon="trash" />
                        </span>
                    </div>
                </span>
            </div>
        )
    }
}

export class TaskList extends Component {
    render() {
        const tasks = this.props.tasks.map((item, index) => {
            return (
                <Task item={item} index={index} />
            )
        })
        return (
            <ul className="taskList">
                {tasks}
            </ul>
        )
    }
}

export default TaskList