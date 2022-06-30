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
            console.log(newTodos);
        }
    };

    render() {
        return (
            <div className='App'>
                <section className='todoapp'>
                    <Header onSubmit={this.handleSubmit} onChange={this.handleChange} task={this.state.task} />
                    <TodoList />
                    <Footer />
                </section>
            </div>
        );
    }
}

export default App;
