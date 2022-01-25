let initinalState = {
  fetchUser: null,
  axiosUser: null,
};

function getApi(state = initinalState, action) {
  switch (action.type) {
    case "FETCH_USER":
      return {
        ...state,
        fetchUser: action.payload,
      };
    case "AXIOS_USER":
      return {
        ...state,
        axiosUser: action.payload,
      };
    default:
      return state;
  }
}
export default getApi;
