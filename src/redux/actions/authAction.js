import { toast } from "react-toastify";
import * as AuthApi from "../../api/authRequest.js";

export const userLogin = (formData) => async (dispatch) => {
  dispatch({ type: "AUTH_START" });
  try {
    const data = await AuthApi.login(formData);
    dispatch({ type: "AUTH_SUCCESS", payload: { data } });
  } catch (error) {
    //　error.response.data
    dispatch({
      type: "AUTH_FAIL",
      payload: { error: error.response.data.message },
    });
  }
};

export const userLogout = () => async (dispatch) => {
  dispatch({ type: "AUTH_LOGOUT" });
};

export const createAccount = (formData) => async (dispatch) => {
  dispatch({ type: "AUTH_START" });
  try {
    await AuthApi.createAccount(formData);
    toast.success("Đăng ký thành công");
  } catch (error) {
    console.log(error);
    toast.error(error.response.data.message);
    dispatch({
      type: "AUTH_FAIL",
      payload: { error: error.response.data.message },
    });
  }
};
