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
    this.switchEditTodoItem = this.switchEditTodoItem.bind(this);
    this.editTodoItem = this.editTodoItem.bind(this);
    this.updateTodoItem = this.updateTodoItem.bind(this);
  }

  handleSubmit(e) {
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

  switchEditTodoItem(target) {
    const todoItems = this.state.todoItems;
    const newTodoItems = todoItems.map(todoItem => {
      if(todoItem.id === target.id) {
        return { ...todoItem, edit: true }
      }
      return todoItem;
    });

    this.setState({ todoItems: newTodoItems });
  }

  editTodoItem(e, target) {
    const name = e.target.name;
    const value = e.target.value;
    const todoItems = this.state.todoItems;
    const newTodoItems = todoItems.map(todoItem => {
      if(todoItem.id === target.id) {
        return { ...todoItem, [name]: value }
      }
      return todoItem;
    })

    this.setState({ todoItems: newTodoItems });
  }

  updateTodoItem(target) {
    const todoItems = this.state.todoItems;
    const newTodoItems = todoItems.map(todoItem => {
      if(!todoItem.title) return todoItem;
      if(todoItem.id === target.id) return { ...todoItem, edit: false };
      return todoItem;
    });
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
            setTodoStatus={this.setTodoStatus}
            deleteTodoItem={this.deleteTodoItem}
            switchEditTodoItem={this.switchEditTodoItem}
            editTodoItem={this.editTodoItem}
            updateTodoItem={this.updateTodoItem}
          />
        </div>
      </div>
    );
  }
}

export default App;
