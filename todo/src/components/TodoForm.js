import React from 'react';

const TodoForm = () => {
    return ( 
        <form name="newTodo">
        <input name="text" type="text" placeholder="add new todo"/>
        <input type="submit"/>
        </form>
     );
}
 
export default TodoForm;