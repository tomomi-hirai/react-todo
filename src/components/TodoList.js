import React, { Component } from 'react';
import TodoItem from './TodoItem';
import EditTodoItem from './EditTodoItem';
import '../css/todoList.css';

class TodoList extends Component {
  render() {
    return(
      <ul className="todoList">
        <TodoItem />
        <EditTodoItem />
      </ul>
    )
  }
}

export default TodoList;