import React, { Component } from 'react';
import '../css/form.css';

class Form extends Component {
  render() {
    return(
      <form className="mainForm" onSubmit={this.props.handleSubmit}>
        <label className="mainForm__label">タイトル
          <input className="mainForm__textBox" type="text" name="title" required />
        </label>
        <label className="mainForm__label">説明
          <textarea className="mainForm__textBox" name="desc"></textarea>
        </label>
        <input className="mainForm__addBtn" type="submit" value="Add" />
      </form>
    );
  }
}

export default Form;