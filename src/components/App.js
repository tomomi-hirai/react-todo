import React, { Component } from 'react';
import Form from './Form';
import TodoList from './TodoList';
import '../css/ress.css';
import '../css/app.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <h1 className="heading">what I have to do</h1>
        <div className="app__mainFormWrapper">
          <Form />
        </div>
        <div className="app__todoWrapper">
          <TodoList />
        </div>
      </div>
    );
  }
}

export default App;
