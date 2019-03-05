import React, { Component } from 'react';

import './App.css';
import TodoList from './containers/TodoList';
import TodoForm from './components/TodoForm';

class App extends Component {
  state = {
    todos: [],
  };

  componentDidMount() {
    let initialTodos = {
      text: 'initialtask1',
      completed: false,
    };
    this.setState({
      todos: [...this.state.todos, initialTodos]
    })
  }

  render() {
    return (
      <div className="App">
        <TodoForm />
        <TodoList todos={this.state.todos}/>
      </div>
    );
  }
}

export default App;
