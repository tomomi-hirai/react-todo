import React, { Component } from 'react';

class EditTodoItem extends Component {
  handleChange = (e) => {
    this.props.editTodoItem(e, this.props);
  }

  handleUpdate = () => {
    this.props.updateTodoItem(this.props);
  }

  render() {
    return(
      <li className="todoList__item editItem">
        <div className="editItem__content">
          <form className="editForm">
            <input className="editForm__textBox" type="text" name="title" value={this.props.title} onChange={this.handleChange} />
            <textarea className="editForm__textBox" name="desc" value={this.props.desc} onChange={this.handleChange}></textarea>
          </form>
        </div>
        <ul className="todoList__actionBtnList">
          <li className="todoList__actionBtnItem">
            <button className="actionBtn actionBtn--update" type="button" onClick={this.handleUpdate}>
              <img className="actionBtn__icon" src="img/icon_update.svg" alt="更新" />
            </button>
          </li>
          <li className="todoList__actionBtnItem">
            <button className="actionBtn actionBtn--return" type="button">
              <img className="actionBtn__icon" src="img/icon_return.svg" />
            </button>
          </li>
        </ul>
      </li>
    );
  }
}

export default EditTodoItem;