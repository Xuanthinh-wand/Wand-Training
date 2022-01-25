import axios from "axios";

const fetchUser = () => async (dispatch) => {
  const result = await fetch("https://jsonplaceholder.typicode.com/users");
  const fetchUsers = await result.json();
  dispatch({ type: "FETCH_USER", payload: fetchUsers });
};
const axiosUser = () => async (dispatch) => {
  const axiosUsers = await axios("https://jsonplaceholder.typicode.com/users");
  dispatch({ type: "AXIOS_USER", payload: axiosUsers.data });
};

export { fetchUser, axiosUser };
