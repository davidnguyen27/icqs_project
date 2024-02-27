const authReducer = (
  state = { authData: null, loading: false, error: false },
  action
) => {
  const { type, payload } = action;
  switch (type) {
    case "AUTH_START":
      return { ...state, loading: true, error: false };
    case "AUTH_SUCCESS":
      localStorage.setItem("user", JSON.stringify({ ...payload?.data }));
      return { ...state, authData: payload.data, loading: false };
    case "AUTH_FAIL":
      return { ...state, loading: false, error: true };
    case "AUTH_LOGOUT":
      localStorage.removeItem("user");
      localStorage.removeItem("payment");
      return { ...state, authData: null, loading: false, error: false };
    default:
      return { ...state };
  }
};

export default authReducer;
