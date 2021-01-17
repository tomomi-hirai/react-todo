import React, { Component } from 'react';

class TodoItem extends Component {
  render() {
    return(
      <li className="todoList__item incompleteItem">
        <div className="incompleteItem__content">
          <span className="incompleteItem__title">タイトル</span>
          <p className="incompleteItem__desc">ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。</p>
        </div>
        <ul className="todoList__actionBtnList">
          <li className="todoList__actionBtnItem">
            <button className="actionBtn actionBtn--done" type="button">
              <img className="actionBtn__icon" src="img/icon_done.svg" />
            </button>
          </li>
          <li className="todoList__actionBtnItem">
            <button className="actionBtn actionBtn--edit" type="button">
              <img className="actionBtn__icon" src="img/icon_edit.svg" />
            </button>
          </li>
        </ul>
      </li>
      /* <li className="todoList__item doneItem">
        <div className="doneItem__content">
          <span className="doneItem__title">タイトル</span>
          <p className="doneItem__desc">ここにテキストが入ります。ここにテキストが入ります。</p>
        </div>
        <ul className="todoList__actionBtnList">
          <li className="todoList__actionBtnItem">
            <button className="actionBtn actionBtn--return" type="button">
              <img className="actionBtn__icon" src="img/icon_return.svg" />
            </button>
          </li>
          <li className="todoList__actionBtnItem">
            <button className="actionBtn actionBtn--delete" type="button">
              <img className="actionBtn__icon" src="img/icon_delete.svg"/>
            </button>
          </li>
        </ul>
      </li> */
    );
  }
}

export default TodoItem;