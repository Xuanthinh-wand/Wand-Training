function fetchData() {
    fetch('https://localhost:7297/api/todoitems')
        .then((res) => res.json())
        .then(
            (result) => {
                console.log('🚀 ~ file: todos.js ~ line 8 ~ data ~ result', result);
                return result;
            },
            (error) => {
                console.log(error);
                return [];
            },
        );
}
let data = fetchData();
console.log('🚀 ~ file: todos.js ~ line 16 ~ data', data);

let initState = {
    todoItems: data,
};

const Todos = (state = initState, action) => {
    switch (action.type) {
        case 'AddTodo':
            const newTodo = {
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
