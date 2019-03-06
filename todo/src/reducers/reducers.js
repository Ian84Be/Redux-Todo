import {ADD_TODO} from '../actions';

const initialState = {
    todos: [
        {
            text:'initialState text',
            id: Date.now(),
            completed: false,
        },
    ]
};

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            const newTodo = {
                text:action.payload,
                id: Date.now(),
                completed: false,
            };
            return {
                ...state,
                todos: [...state.todos, newTodo]
            };
        default:
            return state;
    }
}