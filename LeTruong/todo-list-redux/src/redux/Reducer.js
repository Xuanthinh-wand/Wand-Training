import Storage from '../until/Storage';
import {v4 as uuidv4} from 'uuid';
let initState = {
    todos: Storage.get(),
    groupFilters: {
        filter: 'all',
        filters: {
            all: () => true,
            active: (todo) => !todo.completed,
            completed: (todo) => todo.completed,
        },
    },
};

const rootReducer = (state = initState, action) => {
    switch (action.type) {
        case 'AddTodo':
            const newTodo = {
                id: uuidv4(),
                name: action.name,
                completed: false,
            };
            const newTodos = [...state.todos, newTodo];
            Storage.set(newTodos);
            return {
                todos: newTodos,
                groupFilters: {
                    filter: state.groupFilters.filter,
                    filters: state.groupFilters.filters,
                },
            };

        case 'DeleteTodo':
            Storage.set(state.todos.filter((todo) => todo.id !== action.id));
            return {
                todos: state.todos.filter((todo) => todo.id !== action.id),
                groupFilters: {
                    filter: state.groupFilters.filter,
                    filters: state.groupFilters.filters,
                },
            };

        case 'CompletedTodo':
            const listTodos = state.todos;
            const todoEditComplete = listTodos.find((todo) => todo.id === action.id);
            todoEditComplete.completed = !todoEditComplete.completed;
            Storage.set(listTodos);
            return {
                todos: listTodos,
                groupFilters: {
                    filter: state.groupFilters.filter,
                    filters: state.groupFilters.filters,
                },
            };

        case 'DbClickEdit':
            const eleCurrent = document.querySelector('.todo-list [data-id="' + action.id + '"]');
            eleCurrent.classList.add('editing');
            const inputEdit = document.querySelector('[data-id="' + action.id + '"] .edit');
            inputEdit.focus();
            break;

        case 'EditTodo':
            const listTodosEdit = state.todos;
            const todoEdit = listTodosEdit.find((todo) => todo.id === action.id);
            todoEdit.name = action.value;
            const eleEdit = document.querySelector('.todo-list .editing');
            if (eleEdit) {
                eleEdit.classList.remove('editing');
            }
            Storage.set(listTodosEdit);
            return {
                todos: state.todos.map((todo) =>
                    todo.id === action.id ? Object.assign({}, todo, {name: action.value}) : todo,
                ),
                groupFilters: {
                    filter: state.groupFilters.filter,
                    filters: state.groupFilters.filters,
                },
            };

        case 'SwitchFilter':
            return {
                todos: state.todos,
                groupFilters: {
                    filter: action.filter,
                    filters: state.groupFilters.filters,
                },
            };

        default:
            return state;
    }
};

export default rootReducer;
