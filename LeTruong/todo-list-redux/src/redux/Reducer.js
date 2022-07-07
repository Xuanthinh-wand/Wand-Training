import Storage from '../until/Storage';
import {v4 as uuidv4} from 'uuid';
let initState = Storage.get();
// todos: Storage.get(),
// filter: 'all',
// filters: {
//     all: () => true,
//     active: (todo) => !todo.completed,
//     completed: (todo) => todo.completed,
// },

const rootReducer = (state = initState, action) => {
    switch (action.type) {
        case 'AddTodo':
            const newTodo = {
                id: uuidv4(),
                name: action.name,
                completed: false,
            };
            const newTodos = [...state, newTodo];
            Storage.set(newTodos);
            return newTodos;

        case 'DeleteTodo':
            Storage.set(state.filter((todo) => todo.id !== action.id));
            return state.filter((todo) => todo.id !== action.id);

        case 'CompletedTodo':
            const todo = state.find((todo) => todo.id === action.id);
            todo.completed = !todo.completed;
            Storage.set(state);
            return state;

        case 'DbClickEdit':
            const eleCurrent = document.querySelector('.todo-list [data-id="' + action.id + '"]');
            eleCurrent.classList.add('editing');
            const inputEdit = document.querySelector('[data-id="' + action.id + '"] .edit');
            inputEdit.focus();
            break;

        case 'EditTodo':
            const todoEdit = state.find((todo) => todo.id === action.id);
            todoEdit.name = action.value;
            const eleEdit = document.querySelector('.todo-list .editing');
            eleEdit.classList.remove('editing');
            Storage.set(state);
            return state;

        default:
            return state;
    }
};

export default rootReducer;
