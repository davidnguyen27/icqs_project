const userReducer = (
  state = { userData: null, loading: false, error: false },
  action
) => {
  const { type, payload } = action;
  switch (type) {
    case "USER_START":
      return { ...state, loading: true, error: false };
    case "USER_SUCCESS":
      localStorage.setItem("get-user", JSON.stringify({ ...payload?.data }));
      return { ...state, userData: payload.data, loading: false };
    case "EDIT_USER_SUCCESS":
      const { formEdit, id } = payload;
      const updateUser = state.userData.map((user) => {
        if (user.id === id) {
          return { ...user, ...formEdit };
        }
        return user;
      });
      return { ...state, userData: updateUser, loading: false };
    case "USER_FAIL":
      return { ...state, loading: false, error: true };
    default:
      return { ...state };
  }
};

export default userReducer;
