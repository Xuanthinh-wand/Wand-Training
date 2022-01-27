const insert =
  (title, details, created_at, created_users) => async (dispatch) => {
    dispatch({
      type: "WRITE_CONTENT",
      payload: { title, details, created_at, created_users },
    });
  };

const remove = (id) => async (dispatch) => {
  dispatch({ type: "DELETE_CONTENT", payload: id });
};

export { insert, remove };
