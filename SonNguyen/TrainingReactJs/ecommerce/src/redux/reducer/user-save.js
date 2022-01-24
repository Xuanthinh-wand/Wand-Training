let initinalState = {
  fetchUser: null,
  axiosUser: null,
};

function getApi(state = initinalState, action) {
  switch (action.type) {
    case "FETCH_USER":
      return {
        fetchUser: action.payload.fetchUsers,
      };
    case "AXIOS_USER":
      return {
        axiosUser: action.payload.axiosUsers,
      };
    default:
      return state;
  }
}
export default getApi;
