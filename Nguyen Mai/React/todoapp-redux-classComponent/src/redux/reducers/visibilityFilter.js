const SET_FILTER = "SET_FILTER";
const VISIBILITY_FILTERS = {
  ALL: "all",
  COMPLETED: "completed",
  INCOMPLETE: "incomplete"
};

const initialState = VISIBILITY_FILTERS.ALL;

const visibilityFilter = (state = initialState, action) => {
  switch (action.type) {
    case SET_FILTER: {
      return action.payload.filter;
    }
    default: {
      return state;
    }
  }
};
export const getTodoList = store =>
  store && store.todos ? store.todos.allIds : [];

export const getTodoById = (store, id) =>
  store && store.todos && store.todos.byIds
    ? { ...store.todos.byIds[id], id }
    : {};

export const getTodos = store =>
  getTodoList(store).map(id => getTodoById(store, id));

  export const getTodosByVisibilityFilter = (store, visibilityFilter) => {
    const allTodos = getTodos(store)
    switch (visibilityFilter) {
      case VISIBILITY_FILTERS.COMPLETED:
        return allTodos.filter(todo => todo.completed)
      case VISIBILITY_FILTERS.INCOMPLETE:
        return allTodos.filter(todo => !todo.completed)
      case VISIBILITY_FILTERS.ALL:
      default:
        return allTodos
    }
  }
export default visibilityFilter;
