const send = (name, email, content) => async (dispatch) => {
  dispatch({ type: "SEND_CONTACT", payload: { name, email, content } });
};

export { send };
