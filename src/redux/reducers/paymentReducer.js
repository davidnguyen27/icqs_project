const paymentReducer = (
  state = { paymentData: null, loading: false, error: false },
  action
) => {
  const { type, payload } = action;
  switch (type) {
    case "PAYMENT_START":
      return { ...state, loading: true, error: false };
    case "PAYMENT_SUCCESS":
      localStorage.setItem("payment", JSON.stringify({ ...payload?.data }));
      return { ...state, paymentData: payload.data, loading: false };
    case "PAYMENT_FAIL":
      return { ...state, loading: false, error: true };
    default:
      return { ...state };
  }
};

export default paymentReducer;
