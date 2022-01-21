const createTodo = (title, workDay, addTime) => ({
  type: "ADD_LIST",
  payload: {
    title,
    workDay,
    addTime,
  },
});

const updateTodo = (id, title, workDay, addTime) => ({
  type: "UPDATE_LIST",
  payload: {
    id,
    title,
    workDay,
    addTime,
  },
});

const removeTodo = (id) => ({
  type: "REMOVE_LIST",
  payload: {
    id,
  },
});

export { createTodo, updateTodo, removeTodo };
