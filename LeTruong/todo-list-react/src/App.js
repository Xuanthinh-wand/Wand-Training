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
        const todos = this.state.todos;
        const newTodos = todos.slice(index + 1);
        this.setState(() => ({
            todos: newTodos,
        }));
        Storage.set(newTodos);
    };

    handleToggle = (index) => {
        const todos = this.state.todos;
        const todo = todos[index];
        todo.completed = !todo.completed;
        this.setState(() => ({
            todos: todos,
        }));
        Storage.set(todos);
    };

    render() {
        return (
            <div className='App'>
                <section className='todoapp'>
                    <Header onSubmit={this.handleSubmit} onChange={this.handleChange} task={this.state.task} />
                    <TodoList
                        handleDelete={this.handleDelete}
                        handleToggle={this.handleToggle}
                        todos={this.state.todos}
                        filters={this.state.filters}
                        filter={this.state.filter}
                    />
                    {this.state.todos.length > 0 && <Footer />}
                </section>
            </div>
        );
    }
}

export default App;
