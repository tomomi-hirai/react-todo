import React, { Component } from 'react';
import Form from './Form';
import TodoList from './TodoList';
import '../css/ress.css';
import '../css/app.css';

class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      todoItems: [
        {
          id: 1,
          title: 'test title 1',
          desc: 'test description 1 test description 1 test description 1',
          done: false
        },
        {
          id: 2,
          title: 'test title 2',
          desc: 'test description 2 test description 2 test description 2',
          done: false
        }
      ]
    }
  }

  render() {
    return (
      <div className="app">
        <h1 className="heading">what I have to do</h1>
        <div className="app__mainFormWrapper">
          <Form />
        </div>
        <div className="app__todoWrapper">
          <TodoList
            todoItems={this.state.todoItems}
          />
        </div>
      </div>
    );
  }
}

export default App;
