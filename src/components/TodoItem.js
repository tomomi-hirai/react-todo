import React, { Component } from 'react';

class TodoItem extends Component {
  handleTodoStatus = () => {
    this.props.setTodoStatus(this.props);
  }

  handleDelete = () => {
    this.props.deleteTodoItem(this.props);
  }

  handleEdit = () => {
    this.props.switchEditTodoItem(this.props);
  }

  render() {
    const done = this.props.done;
    const className = done ? 'doneItem': 'incompleteItem';
    const btn1 = done ? 'return' : 'done';
    const alt1 = done ? '元に戻す' : '完了';
    const btn2 = done ? 'delete' : 'edit';
    const alt2 = done ? '削除' : '編集';
    const onClick = done ? this.handleDelete : this.handleEdit;

    return(
      <li className={`todoList__item ${className}`} >
        <div className={`${className}__content`}>
          <span className={`${className}__title`}>{this.props.title}</span>
          <p className={`${className}__desc`}>{this.props.desc}</p>
        </div>
        <ul className="todoList__actionBtnList">
          <li className="todoList__actionBtnItem">
            <button className={`actionBtn actionBtn--${btn1}`} type="button" onClick={this.handleTodoStatus}>
              <img className="actionBtn__icon" src={`img/icon_${btn1}.svg`} alt={alt1} />
            </button>
          </li>
          <li className="todoList__actionBtnItem">
            <button className={`actionBtn actionBtn--${btn2}`} type="button" onClick={onClick}>
              <img className="actionBtn__icon" src={`img/icon_${btn2}.svg`} alt={alt2} />
            </button>
          </li>
        </ul>
      </li>
    );
  }
}

export default TodoItem;