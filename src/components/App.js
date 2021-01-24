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
    this.setTodoStatus = this.setTodoStatus.bind(this);
    this.deleteTodoItem = this.deleteTodoItem.bind(this);
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

  setTodoStatus(target) {
    const todoItems = [...this.state.todoItems];
    const index = todoItems.findIndex(todoItem => todoItem.id === target.id);
    const todoItem = todoItems[index]
    todoItem.done = !todoItem.done;

    this.setState({ todoItems });
  }

  deleteTodoItem(target) {
    const todoItems = this.state.todoItems;
    const index = todoItems.findIndex(todoItem => todoItem.id === target.id);
    todoItems.splice(index, 1);

    this.setState({ todoItems });
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
            setTodoStatus={this.setTodoStatus}
            deleteTodoItem={this.deleteTodoItem}
          />
        </div>
      </div>
    );
  }
}

export default App;
