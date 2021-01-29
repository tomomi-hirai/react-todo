import React, { Component } from 'react';
import TodoItem from './TodoItem';
import EditTodoItem from './EditTodoItem';
import '../css/todoList.css';

class TodoList extends Component {
  render() {
    const todoItems = this.props.todoItems.map(todoItem => {
      if(todoItem.edit) {
        return (
          <EditTodoItem 
            key={todoItem.id}
            {...todoItem}
            editTodoItem={this.props.editTodoItem}
            updateTodoItem={this.props.updateTodoItem}
          />
        );
      } else {
        return (
          <TodoItem
            key={todoItem.id}
            {...todoItem}
            setTodoStatus={this.props.setTodoStatus}
            deleteTodoItem={this.props.deleteTodoItem}
            switchEditTodoItem={this.props.switchEditTodoItem}
          />
        );
      }
    });

    return(
      <ul className="todoList">
        {todoItems}
      </ul>
    );
  }
}

export default TodoList;