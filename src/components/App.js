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
  }

  handleSubmit = (e) => {
    e.preventDefault();

    const target = e.target;
    const newTodoItem = {
      id: currentId,
      title: target.title.value,
      desc: target.desc.value,
      done: false,
      edit: false
    };
    const newTodoItems = [...this.state.todoItems, newTodoItem];

    this.setState({ todoItems: newTodoItems });
    currentId++;
    target.title.value = '';
    target.desc.value = '';
  }

  switchTodoStatus = (id) => {
    const todoItems = [...this.state.todoItems];
    const index = todoItems.findIndex(todoItem => todoItem.id === id);
    const todoItem = todoItems[index]
    todoItem.done = !todoItem.done;

    this.setState({ todoItems });
  }

  deleteTodoItem = (id) => {
    const todoItems = this.state.todoItems;
    const index = todoItems.findIndex(todoItem => todoItem.id === id);
    todoItems.splice(index, 1);

    this.setState({ todoItems });
  }

  switchEditTodoItem = (id) => {
    const todoItems = this.state.todoItems;
    const newTodoItems = todoItems.map(todoItem => {
      if(todoItem.id === id) return { ...todoItem, edit: true }
      return todoItem;
    });

    this.setState({ todoItems: newTodoItems });
  }

  updateTodoItem = (id, title, desc) => {
    const todoItems = this.state.todoItems;
    const newTodoItems = todoItems.map(todoItem => {
      if(!title) return todoItem;
      if(todoItem.id === id) return { ...todoItem, title, desc, edit: false };
      return todoItem;
    });

    this.setState({ todoItems: newTodoItems });
  }

  cancelEdit = (id) => {
    const todoItems = this.state.todoItems;
    const newTodoItems = todoItems.map(todoItem => {
      if(todoItem.id === id) return { ...todoItem, edit: false }
      return todoItem;
    })

    this.setState({ todoItems: newTodoItems });
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
            switchTodoStatus={this.switchTodoStatus}
            deleteTodoItem={this.deleteTodoItem}
            switchEditTodoItem={this.switchEditTodoItem}
            updateTodoItem={this.updateTodoItem}
            cancelEdit={this.cancelEdit}
          />
        </div>
      </div>
    );
  }
}

export default App;
