import React, { Component } from 'react';
import '../css/ress.css';
import '../css/app.css';
import '../css/form.css';
import '../css/todoList.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <h1 className="heading">what I have to do</h1>
        <div className="app__mainFormWrapper">
          <from className="mainForm">
            <label className="mainForm__label">タイトル
              <input className="mainForm__textBox" type="text" name="title" required />
            </label>
            <label className="mainForm__label">説明
              <textarea className="mainForm__textBox" name="desc"></textarea>
            </label>
            <button className="mainForm__addBtn" type="button">Add</button>
          </from>
        </div>
        <div className="app__todoWrapper">
          <ul className="todoList">
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
            <li className="todoList__item doneItem">
              <div className="doneItem__content"><span className="doneItem__title">タイトル</span>
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
            </li>
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
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
