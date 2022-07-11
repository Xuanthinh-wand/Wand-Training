export const addTodo = (name) => {
    return {
        type: 'AddTodo',
        name,
    };
};
export const deleteTodo = (id) => {
    return {
        type: 'DeleteTodo',
        id,
    };
};
export const completedTodo = (id) => {
    return {
        type: 'CompletedTodo',
        id,
    };
};
export const dbClickEdit = (id) => {
    return {
        type: 'DbClickEdit',
        id,
    };
};
export const editTodo = (id, value) => {
    return {
        type: 'EditTodo',
        id,
        value,
    };
};
