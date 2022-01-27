let initinalState = {
  users: [],
  isLogin: false,
  isUsers: null,
};

const account = (state = initinalState, action) => {
  switch (action.type) {
    case "REGISTER":
      return {
        ...state,
        users: [...state.users, action.payload],
      };
    case "LOGIN":
      return {
        ...state,
        isLogin: true,
        isUsers: action.payload,
      };
    case "CHANGE_PASSWORD":
      let { id, username, password } = action.payload;
      let newAccount = { username, password };
      state.users.splice(id, 1, newAccount);
      return { ...state, users: state.users };
    case "LOGOUT":
      console.log(state);
      return {
        ...state,
        isLogin: false,
        isUsers: null,
      };
    default:
      return state;
  }
};
export { account };
