function fetchUser(state = null, action) {
  switch (action.type) {
    case "FETCH_USER":
      state = action.payload.fetchUsers;
      return state;
    default:
      return state;
  }
}
export default fetchUser;
