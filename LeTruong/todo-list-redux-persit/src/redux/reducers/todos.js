import {v4 as uuidv4} from 'uuid';
let initState = {
    todoItems: JSON.parse(localStorage.getItem('persist:root')) || [],
};

const Todos = (state = initState, action) => {
    switch (action.type) {
        case 'AddTodo':
            const newTodo = {
                id: uuidv4(),
                name: action.name,
                completed: false,
            };
            const newTodos = [...state.todoItems, newTodo];
            return {
                todoItems: newTodos,
            };

        case 'DeleteTodo':
            return {
                todoItems: state.todoItems.filter((todo) => todo.id !== action.id),
            };

        case 'CompletedTodo':
            return {
                todoItems: state.todoItems.map((todo) =>
                    todo.id === action.id ? Object.assign({}, todo, {completed: !todo.completed}) : todo,
                ),
            };

        case 'DbClickEdit':
            const eleCurrent = document.querySelector('.todo-list [data-id="' + action.id + '"]');
            eleCurrent.classList.add('editing');
            const inputEdit = document.querySelector('[data-id="' + action.id + '"] .edit');
            inputEdit.focus();
            return {
                ...state,
            };

        case 'EditTodo':
            const eleEdit = document.querySelector('.todo-list .editing');
            if (eleEdit) {
                eleEdit.classList.remove('editing');
            }
            return {
                todoItems: state.todoItems.map((todo) =>
                    todo.id === action.id ? Object.assign({}, todo, {name: action.value}) : todo,
                ),
            };

        default:
            return state;
    }
};

export default Todos;
