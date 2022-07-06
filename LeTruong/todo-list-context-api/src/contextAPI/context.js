import Storage from '../until/Storage';
import React from 'react';

const TodoContext = React.createContext();
class TodoProvider extends React.Component {
    state = {
        todos: Storage.get(),
        filter: 'all',
        filters: {
            all: () => true,
            active: (todo) => !todo.completed,
            completed: (todo) => todo.completed,
        },

        todosRender: () => {
            const todos = this.state.todos;
            const filter = this.state.filter;
            const filters = this.state.filters;
            return todos.filter(filters[filter]);
        },

        handleAdd: (name) => {
            if (name) {
                const newTodo = {
                    id: this.state.todos.length + 1,
                    name,
                    completed: false,
                };
                const currentTodos = this.state.todos;
                const newTodos = [...currentTodos, newTodo];
                this.setState(() => ({
                    todos: newTodos,
                }));
                Storage.set(newTodos);
            }
        },

        handleDelete: (id) => {
            if (id) {
                const currentTodos = this.state.todos;
                const newTodos = currentTodos.filter((todo) => todo.id !== id);
                this.setState(() => ({
                    todos: newTodos,
                }));
                Storage.set(newTodos);
            }
        },

        handleToggle: (id) => {
            if (id) {
                let todos = this.state.todos;
                let todo = todos.find((todo) => todo.id === id);
                todo.completed = !todo.completed;
                this.setState(() => ({
                    todos: todos,
                }));
                Storage.set(todos);
            }
        },

        handleToggleAll: (status) => {
            let todos = this.state.todos;
            todos.forEach((todo) => (todo.completed = !status));
            this.setState(() => ({
                todos: todos,
            }));
            Storage.set(todos);
        },
        handleDbClick: (id) => {
            const eleCurrent = document.querySelector('.todo-list [data-id="' + id + '"]');
            eleCurrent.classList.add('editing');
            const inputEdit = document.querySelector('[data-id="' + id + '"] .edit');
            inputEdit.focus();
        },

        handleEdit: (id, value) => {
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
            if (eleCurrent) {
                eleCurrent.classList.remove('editing');
            }
        },

        handleSwitchFilter: (filter) => {
            this.setState({
                filter: filter,
            });
        },
    };

    render() {
        return <TodoContext.Provider value={this.state}>{this.props.children}</TodoContext.Provider>;
    }
}
export {TodoProvider, TodoContext};
