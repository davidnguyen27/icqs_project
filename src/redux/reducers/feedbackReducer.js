const feedbackReducer = (
  state = { feedbackData: null, loading: false, error: false },
  action
) => {
  const { type, payload } = action;
  switch (type) {
    case "FEEDBACK_START":
      return { ...state, loading: true, error: false };
    case "FEEDBACK_SUCCESS":
      localStorage.setItem("feedback", JSON.stringify({ ...payload?.data }));
      return { ...state, feedbackData: payload.data, loading: false };
    case "FEEDBACK_FAIL":
      return { ...state, loading: false, error: true };
    case "CREATE_FEEDBACK_SUCCESS":
      const newFeedback = [...state.feedbackData, payload.data];
      return {
        ...state,
        feedbackData: newFeedback,
        loading: false,
      };
    default:
      return { ...state };
  }
};

export default feedbackReducer;
