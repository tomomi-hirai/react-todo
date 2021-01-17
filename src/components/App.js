import React, { Component } from 'react';
import TodoList from './TodoList';
import '../css/ress.css';
import '../css/app.css';
import '../css/form.css';

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
          <TodoList />
        </div>
      </div>
    );
  }
}

export default App;
