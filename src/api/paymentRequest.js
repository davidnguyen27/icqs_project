import { Api } from "../Utils/Api";
import { getToken } from "../Utils/Token";

const API = Api();
export const getPayment = () => {
  const token = getToken();
  return API.get("/api/v1/payment", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const getAllPayment = (limit, page, title) => {
  const token = getToken();
  return API.get(
    `/api/v1/payment/allpayment?limit=${limit}&page=${page}&title=${title}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};
