import React, { Component } from 'react';
import TodoItem from './TodoItem';
import EditTodoItem from './EditTodoItem';
import '../css/todoList.css';

class TodoList extends Component {
  render() {
    const todoItems = this.props.todoItems.map(todoItem => 
      <TodoItem
        key={todoItem.id}
        {...todoItem}
        setTodoStatus={this.props.setTodoStatus}
      />
    );

    return(
      <ul className="todoList">
        {todoItems}
        <EditTodoItem />
      </ul>
    )
  }
}

export default TodoList;