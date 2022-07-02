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

    handleSubmit = (value) => {
        if (value) {
            const newTask = {
                id: this.state.todos.length + 1,
                name: value,
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
        const eleNewTodo = document.querySelector('.new-todo');
        eleNewTodo.value = '';
    };

    handleDelete = (id) => {
        let todos = this.state.todos;
        const newTodos = todos.filter((todo) => todo.id !== id);
        this.setState(() => ({
            todos: newTodos,
        }));
        Storage.set(newTodos);
    };

    handleToggle = (id) => {
        let todos = this.state.todos;
        let todo = todos.find((todo) => todo.id === id);
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

    handleDbClick = (id) => {
        const eleCurrent = document.querySelector('.todo-list [data-id="' + id + '"]');
        eleCurrent.classList.add('editing');
        const inputEdit = document.querySelector('[data-id="' + id + '"] .edit');
        inputEdit.focus();
    };

    handleEditTodo = (id, value) => {
        const todos = this.state.todos;
        const todo = todos.find((todo) => todo.id === id);
        const eleCurrent = document.querySelector('.todo-list .editing');
        todo.name = value;
        if (value) {
            this.setState(() => ({
                todos: todos,
            }));
        } else {
            this.handleDelete(id);
        }
        Storage.set(todos);
        eleCurrent.classList.remove('editing');
    };

    render() {
        const todos = this.state.todos;
        const filters = this.state.filters;
        const filter = this.state.filter;
        return (
            <div className='App'>
                <section className='todoapp'>
                    <Header handleAdd={this.handleSubmit} />
                    <TodoList
                        handleDelete={this.handleDelete}
                        handleToggle={this.handleToggle}
                        handleToggleAll={this.handleToggleAll}
                        handleDbClick={this.handleDbClick}
                        handleEditTodo={this.handleEditTodo}
                        todos={this.state.todos.filter(filters[filter])}
                    />
                    {this.state.todos.length > 0 && (
                        <Footer
                            lengthTodos={todos.filter(filters[filter]).length}
                            lengthTodoCompleted={todos.filter(filters.completed).length}
                            handleSwitchFilter={this.handleSwitchFilter}
                            handleClearCompeleted={this.handleClearCompeleted}
                            filters={filters}
                            filter={filter}
                        />
                    )}
                </section>
            </div>
        );
    }
}

export default App;
