import * as AuthApi from '../../api/authRequest.js';

export const userLogin = (formData) => async (dispatch) => {
  dispatch({ type: 'AUTH_START' });
  try {
    const data = await AuthApi.login(formData);
    dispatch({ type: 'AUTH_SUCCESS', payload: { data } });
  } catch (error) {
    dispatch({ type: 'AUTH_FAIL' });
  }
};
