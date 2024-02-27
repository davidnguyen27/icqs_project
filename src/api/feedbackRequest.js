import { Api } from "../Utils/Api";
import { getToken } from "../Utils/Token";

const API = Api();
export const getFeedbackType = (limit, page) =>
  API.get(`/api/v1/feedback?limit=${limit}&page=${page}`);
export const createFeedback = (feedback, idProperty) => {
  const token = getToken();
  return API.post(`/api/v1/feedback/${idProperty}`, feedback, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
