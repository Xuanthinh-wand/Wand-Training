export default {
    get() {
        return JSON.parse(localStorage.getItem('todos')) || [];
    },
    set(todos) {
        return localStorage.setItem('todos', JSON.stringify(todos));
    },
};
