import React, { Component } from 'react';
import {addTodo} from '../actions';
import {connect} from 'react-redux';

class TodoForm extends Component {
    state = {
        newTodo: '',
    };

    addTodo = e => {
        e.preventDefault();
        this.props.addTodo(this.state.newTodo);
        this.setState({ newTodo: '' });
    }

    changeHandler = e => {
        this.setState({ newTodo: e.target.value })
    }

    render() {
        return (
            <form name="newTodo" onSubmit={this.addTodo}>
                <input name="text"
                    onChange={this.changeHandler}
                    placeholder="add new todo"
                    type="text"
                    value={this.state.newTodo}
                    required/>
                <input type="submit"/>
            </form>
        );
    }
}

export default connect(null,{addTodo})(TodoForm);
