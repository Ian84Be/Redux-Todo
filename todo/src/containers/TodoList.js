import React from 'react';
import {connect} from 'react-redux';

const TodoList = props => {
    return ( 
        <ul>
            {props.todoList.map(todo => {
                return (
                    <li key={todo.id}>
                        {todo.text}
                    </li>
                );
            })}
        </ul>
     );
}

const mapStateToProps = state => ({
    todoList: state.todos
});
 
// export default TodoList;
export default connect(mapStateToProps)(TodoList);