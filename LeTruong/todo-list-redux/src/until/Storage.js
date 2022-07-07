// eslint-disable-next-line import/no-anonymous-default-export
export default {
    get() {
        return JSON.parse(localStorage.getItem('todos')) || [];
    },

    set(todos) {
        return localStorage.setItem('todos', JSON.stringify(todos));
    },
};
