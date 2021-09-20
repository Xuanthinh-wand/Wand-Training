import React from "react";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import VisibilityFilters from "./components/VisibilityFilters";
import "./styles.css";
import "./App.css";

export default class App extends React.Component {
	render(){
		return (
	    <div className="todo-app">
	      <h1 className="header">Todo List</h1>
	      <AddTodo />
	      <TodoList />
	      <VisibilityFilters />
	    </div>
	  );
	}
}
