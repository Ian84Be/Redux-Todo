import React, { Component } from 'react';
// import { connect } from 'react-redux';

import './App.css';
import TodoList from './containers/TodoList';
import TodoForm from './components/TodoForm';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TodoForm />
        <TodoList />
      </div>
    );
  }
}

export default App;