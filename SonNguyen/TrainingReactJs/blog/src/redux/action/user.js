const register = (username, password) => async (dispatch) => {
  dispatch({ type: "REGISTER", payload: { username, password } });
};

const login = (username) => async (dispatch) => {
  dispatch({ type: "LOGIN", payload: username });
};
const changePass = (id, username, password) => async (dispatch) => {
  dispatch({
    type: "CHANGE_PASSWORD",
    payload: {
      id,
      username,
      password,
    },
  });
};
const logout = () => async (dispatch) => {
  dispatch({ type: "LOGOUT" });
};

export { register, login, logout, changePass };
