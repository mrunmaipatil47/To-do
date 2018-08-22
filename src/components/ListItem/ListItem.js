import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


Button = () => <button class={props.type}></button>
class ListItem extends Component {
    constructor(props) {
        super(props)

        }
    render() {
        return (
            <div>
                <li>{this.props.item}</li>
                <FontAwesomeIcon icon="check" />
            </div>
        );
    }
}