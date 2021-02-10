import React, { Component } from 'react';
import './todo-list-item.css';

export default class TodoListItem extends Component {
    state = { done: false };

    onLabelClick = () => {
        this.setState(({ done }) => {
           
            return { done: !done }
        }
        );
    };

    render() {
        const { done } = this.state;

        let classNames = 'todo-list-item';
        if (done) {
            classNames += ' done';
        }
          const { label, important } = this.props;

        return (
            <span className={classNames}>
                <span className="todo-list-item-label"
                    onClick={this.onLabelClick} >
                    {label}
                </span>
            </span>
        );
    }
}