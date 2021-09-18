
import './App.css';
import React, { Component } from 'react';
import TodoContextProvider from './context/TodoContextProvider';
import TodoList from './component/TodoList';
import TodoInput from './component/TodoInput';

class App extends Component {

  render() {
    return (
      <TodoContextProvider>
        <div className="container">
          <TodoInput></TodoInput>
          <TodoList></TodoList>
        </div>
      </TodoContextProvider>

    );
  }
}
export default App;
