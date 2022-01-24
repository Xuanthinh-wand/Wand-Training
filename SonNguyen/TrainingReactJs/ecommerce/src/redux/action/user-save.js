const fetchUser = (fetchUsers) => ({
  type: "FETCH_USER",
  payload: {
    fetchUsers,
  },
});

export default fetchUser;
