import * as AuthApi from "../../api/authRequest.js";

export const userLogin = (formData) => async (dispatch) => {
  dispatch({ type: "AUTH_START" });
  try {
    const data = await AuthApi.login(formData);
    dispatch({ type: "AUTH_SUCCESS", payload: { data } });
  } catch (error) {
    dispatch({ type: "AUTH_FAIL" });
  }
};

export const userLogout = () => async (dispatch) => {
  dispatch({ type: "AUTH_LOGOUT" });
};

export const createAccount = (formData) => async (dispatch) => {
  dispatch({ type: "AUTH_START" });
  try {
    const data = await AuthApi.createAccount(formData);
    dispatch({ type: "REGISTER_SUCCESS", payload: { data } });
  } catch (error) {
    dispatch({ type: "AUTH_FAIL" });
  }
};
