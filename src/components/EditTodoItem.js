import React, { Component } from 'react';

class EditTodoItem extends Component {
  render() {
    return(
      <li className="todoList__item editItem">
        <div className="editItem__content">
          <from className="editForm">
            <input className="editForm__textBox" type="text" name="title" value="タイトル" />
            <textarea className="editForm__textBox" name="desc">ここにテキストが入ります。</textarea>
          </from>
        </div>
        <ul className="todoList__actionBtnList">
          <li className="todoList__actionBtnItem">
            <button className="actionBtn actionBtn--update" type="button">
              <img className="actionBtn__icon" src="img/icon_update.svg" />
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