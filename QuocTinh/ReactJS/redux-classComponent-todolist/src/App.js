
import './App.css';

import React, { Component } from 'react';
import TodoList from './component/TodoList';
import TodoInput from './component/TodoInput';

class App extends Component {

  render() {
    return (
      <div className="container">
        <TodoInput />
        <TodoList></TodoList>
      </div>
    );
  }
}
export default App;
