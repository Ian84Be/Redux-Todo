import React, {Component} from 'react';
import {connect} from 'react-redux';
import {toggleTodo} from '../actions';

import './TodoList.scss';

class TodoList extends Component {
    
    toggleTodo = e => {
        e.target.classList.toggle('completed');
        let id = Number(e.target.id);
        this.props.toggleTodo(id);
    }
    render() { 
        return ( 
            <ul>
                {this.props.todoList.map(todo => {
                    return (
                        <li
                        id={todo.id}
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