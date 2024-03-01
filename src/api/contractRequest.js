import { getToken } from "../Utils/Token";
import { Api } from "../Utils/Api";
const API = Api();
const token = getToken();

export const createContract = (formData) => {
  return API.post("api/v1/contract", formData, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const getContractByUser = () => {
  return API.get("api/v1/contract", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
