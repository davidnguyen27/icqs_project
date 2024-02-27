import * as FeedbackApi from "../../api/feedbackRequest";

export const getFeedbackType = (page, limit) => async (dispatch) => {
  dispatch({ type: "FEEDBACK_START" });
  try {
    const data = await FeedbackApi.getFeedbackType(limit, page);
    dispatch({ type: "FEEDBACK_SUCCESS", payload: { data } });
  } catch (error) {
    dispatch({ type: "FEEDBACK_FAIL" });
  }
};

export const createFeedback = (feedback, idProperty) => async (dispatch) => {
  dispatch({ type: "FEEDBACK_START" });
  try {
    const data = await FeedbackApi.createFeedback(feedback, idProperty);
    dispatch({ type: "CREATE_FEEDBACK_SUCCESS", payload: { data } });
  } catch (error) {
    dispatch({ type: "FEEDBACK_FAIL" });
  }
};
