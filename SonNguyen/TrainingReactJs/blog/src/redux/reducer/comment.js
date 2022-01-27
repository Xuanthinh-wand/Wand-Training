let initinalState = {
  comment: [],
};

const comment = (state = initinalState, action) => {
  switch (action.type) {
    case "POST_COMMENT":
      return {
        ...state,
        comment: [...state.comment, action.payload],
      };
    case "REMOVE_COMMENT":
      let { comment } = state;
      comment.splice(action.payload, 1);
      return { ...state, comment: state.comment };
    default:
      return state;
  }
};

export { comment };
