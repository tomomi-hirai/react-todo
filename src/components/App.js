import React, { Component } from 'react';
import Form from './Form';
import TodoList from './TodoList';
import '../css/ress.css';
import '../css/app.css';

let currentId = 0;

class App extends Component {
  constructor(props) {
    super(props);

    const todoItems = [];

    this.state = {
      todoItems: todoItems
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();

    const target = e.target;

    const newTodoItem = {
      id: currentId,
      title: target.title.value,
      desc: target.desc.value,
      done: false
    };
    const newTodoItems = [...this.state.todoItems, newTodoItem];
    this.setState({ todoItems: newTodoItems });

    currentId++;
    target.title.value = '';
    target.desc.value = '';
  }

  render() {
    return (
      <div className="app">
        <h1 className="heading">what I have to do</h1>
        <div className="app__mainFormWrapper">
          <Form
            handleSubmit={this.handleSubmit}
          />
        </div>
        <div className="app__todoWrapper">
          <TodoList
            todoItems={this.state.todoItems}
          />
        </div>
      </div>
    );
  }
}

export default App;
