let initState = {
    todoItems: [],
    loading: false,
};

const Todos = (state = initState, action) => {
    switch (action.type) {
        case 'FetchDataRequest':
            return {
                ...state,
                loading: true,
            };
        case 'FetchDataSuccess':
            return {
                loading: false,
                todoItems: action.payload,
            };
        case 'FetchDataError':
            return {
                loading: false,
                todoItems: [],
            };
        case 'AddTodo':
            return {
                loading: false,
                todoItems: [...state.todoItems, action.payload],
            };

        case 'DeleteTodo':
            return {
                loading: false,
                todoItems: action.payload,
            };

        case 'CompletedTodo':
            return {
                loading: false,
                todoItems: action.payload,
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
