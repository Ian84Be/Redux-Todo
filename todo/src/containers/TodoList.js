import React from 'react';

const TodoList = props => {
    return ( 
        <ul>
            {props.todos.map(todo => {
                return (
                    <li key={Date.now()}>
                        {todo.text}
                    </li>
                );
            })}
        </ul>
     );
}
 
export default TodoList;