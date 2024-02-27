import axios from "axios";
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
