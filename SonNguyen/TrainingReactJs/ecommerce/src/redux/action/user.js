const createUser = (name, password, role) => ({
  type: "ADD_USER",
  payload: {
    name,
    password,
    role,
  },
});

const updateUser = (id, name, password, role) => ({
  type: "UPDATE_USER",
  payload: {
    id,
    name,
    password,
    role,
  },
});

const removeUser = (id) => ({
  type: "REMOVE_USER",
  payload: {
    id,
  },
});

const getUser = (name) => ({
  type: "GET_USER",
  payload: {
    name,
  },
});
const logOut = () => ({
  type: "LOGOUT",
});

export { createUser, updateUser, removeUser, getUser, logOut };
