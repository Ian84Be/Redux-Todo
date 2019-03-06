import React, {Component} from 'react';
import {connect} from 'react-redux';
import {toggleTodo} from '../actions';

import './TodoList.scss';

class TodoList extends Component {
    
    toggleTodo = e => {
        e.target.classList.toggle('completed');
    }
    render() { 
        return ( 
            <ul>
                {this.props.todoList.map(todo => {
                    return (
                        <li
                        key={todo.id}
                        onClick={this.toggleTodo}>
                        {todo.text}
                        </li>
                    );
                })}
            </ul>
         );
    }
}
 
const mapStateToProps = state => ({
    todoList: state.todos
});
 
export default connect(mapStateToProps, {toggleTodo})(TodoList);