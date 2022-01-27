let initinalState = {
  posts: [],
};

const writeContent = (state = initinalState, action) => {
  switch (action.type) {
    case "WRITE_CONTENT":
      return {
        ...state,
        posts: [...state.posts, action.payload],
      };
    case "DELETE_CONTENT":
      state.posts.splice(action.payload, 1);
      return { ...state };
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
export { writeContent };
