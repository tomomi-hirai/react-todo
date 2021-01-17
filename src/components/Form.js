import React, { Component } from 'react';
import '../css/form.css';

class Form extends Component {
  render() {
    return(
      <from className="mainForm">
        <label className="mainForm__label">タイトル
          <input className="mainForm__textBox" type="text" name="title" required />
        </label>
        <label className="mainForm__label">説明
          <textarea className="mainForm__textBox" name="desc"></textarea>
        </label>
        <button className="mainForm__addBtn" type="button">Add</button>
      </from>
    );
  }
}

export default Form;