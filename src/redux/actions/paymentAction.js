import * as PaymentApi from "../../api/paymentRequest";

export const getPaymentByAccount = () => async (dispatch) => {
  dispatch({ type: "PAYMENT_START" });
  try {
    const data = await PaymentApi.getPayment();
    dispatch({ type: "PAYMENT_SUCCESS", payload: { data } });
  } catch (error) {
    dispatch({ type: "PAYMENT_FAIL" });
  }
};
