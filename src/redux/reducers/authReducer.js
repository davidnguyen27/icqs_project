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
      localStorage.removeItem("contract");
      return { ...state, authData: null, loading: false, error: false };
    case "REGISTER_SUCCESS":
      const newAccount = [...state.authData, payload.data];
      return { ...state, authData: newAccount, loading: false };
    default:
      return { ...state };
  }
};

export default authReducer;
