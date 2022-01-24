const fetchUser = (fetchUsers) => ({
  type: "FETCH_USER",
  payload: {
    fetchUsers,
  },
});

const axiosUser = (axiosUsers) => ({
  type: "AXIOS_USER",
  payload: {
    axiosUsers,
  },
});

export { fetchUser, axiosUser };
