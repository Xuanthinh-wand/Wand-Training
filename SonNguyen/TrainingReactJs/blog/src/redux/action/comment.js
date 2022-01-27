const post = (id, name, content) => async (dispatch) => {
  dispatch({ type: "POST_COMMENT", payload: { id, name, content } });
};
const remove = (id) => async (dispatch) => {
  dispatch({ type: "REMOVE_COMMENT", payload: { id } });
};

export { post, remove };
