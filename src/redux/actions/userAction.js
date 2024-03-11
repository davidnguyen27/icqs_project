import * as UserApi from "../../api/userRequest";

export const getUser = (limit, page, email) => async (dispatch) => {
  dispatch({ type: "USER_START" });
  try {
    const data = await UserApi.getUser(limit, page, email);
    dispatch({ type: "USER_SUCCESS", payload: { data } });
  } catch (error) {
    dispatch({ type: "USER_FAIL" });
  }
};

export const editUser = (formEdit, id) => async (dispatch) => {
  dispatch({ type: "USER_START" });
  try {
    const data = await UserApi.editUser(formEdit, id);
    dispatch({ type: "EDIT_USER_SUCCESS", payload: { data, id } });
    dispatch(getUser(5, 1, ""));
  } catch (error) {
    dispatch({ type: "USER_FAIL" });
  }
};
