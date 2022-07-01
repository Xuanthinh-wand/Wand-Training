import './App.css';
import React from 'react';

import Storage from './until/Storage';
import Header from './component/Header';
import TodoList from './component/TodoList';
import Footer from './component/Footer';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: Storage.get(),
            task: '',
            filter: 'all',
            filters: {
                all: () => true,
                active: (todo) => !todo.completed,
                completed: (todo) => todo.completed,
            },
        };
    }

    handleChange = (e) => {
        this.setState({task: e.target.value});
    };

    handleSubmit = (e) => {
        e.preventDefault();
        if (this.state.task) {
            const newTask = {
                id: this.state.todos.length + 1,
                task: this.state.task,
                completed: false,
            };
            const curentTodos = this.state.todos;
            const newTodos = [...curentTodos, newTask];
            this.setState(() => ({
                todos: newTodos,
                task: '',
            }));
            Storage.set(newTodos);
        }
    };

    handleDelete = (index) => {
        let todos = this.state.todos;
        todos.splice(index, 1);
        this.setState(() => ({
            todos: todos,
        }));
        Storage.set(todos);
    };

    handleToggle = (index) => {
        let todos = this.state.todos;
        let todo = todos[index];
        todo.completed = !todo.completed;
        this.setState(() => ({
            todos: todos,
        }));
        Storage.set(todos);
    };

    handleToggleAll = (status) => {
        let todos = this.state.todos;
        todos.forEach((todo) => {
            todo.completed = status;
        });
        this.setState(() => ({
            todos: todos,
        }));
        Storage.set(todos);
    };

    handleSwitchFilter = (filter) => {
        this.setState(() => ({
            filter: filter,
        }));
    };

    handleClearCompeleted = () => {
        const todos = this.state.todos;
        const newTodos = todos.filter((todo) => {
            return todo.completed === false;
        });
        this.setState(() => ({
            todos: newTodos,
        }));
        Storage.set(newTodos);
    };

    handleDbClick = (index) => {
        const eleCurrent = document.querySelectorAll('.todo-list li')[index];
        eleCurrent.classList.add('editing');
        const inputEdit = document.querySelectorAll('.todo-list .edit')[index];
        inputEdit.focus();
    };

    handleEditTodo = (index, value) => {
        const todos = this.state.todos;
        const todo = todos[index];
        const eleCurrent = document.querySelector('.todo-list .editing');
        todo.task = value;
        if (value) {
            this.setState(() => ({
                todos: todos,
            }));
        } else {
            this.handleDelete(index);
        }
        Storage.set(todos);
        eleCurrent.classList.remove('editing');
    };

    render() {
        return (
            <div className='App'>
                <section className='todoapp'>
                    <Header onSubmit={this.handleSubmit} onChange={this.handleChange} task={this.state.task} />
                    <TodoList
                        handleDelete={this.handleDelete}
                        handleToggle={this.handleToggle}
                        handleToggleAll={this.handleToggleAll}
                        handleDbClick={this.handleDbClick}
                        handleEditTodo={this.handleEditTodo}
                        todos={this.state.todos}
                        filters={this.state.filters}
                        filter={this.state.filter}
                    />
                    {this.state.todos.length > 0 && (
                        <Footer
                            todos={this.state.todos}
                            handleSwitchFilter={this.handleSwitchFilter}
                            handleClearCompeleted={this.handleClearCompeleted}
                            filters={this.state.filters}
                            filter={this.state.filter}
                        />
                    )}
                </section>
            </div>
        );
    }
}

export default App;
