import axios from "axios";
import { getToken } from "../Utils/Token";
import { Api } from "../Utils/Api";
const API = Api();
const token = getToken();
export const login = (formData) => API.post("/api/v1/auth/login", formData);

export const createAccount = (formData) => {
  return API.post("api/v1/auth/register", formData, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
