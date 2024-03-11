import { getToken } from "../Utils/Token";
import { Api } from "../Utils/Api";
const API = Api();

export const createContract = (formData) => {
  const token = getToken();
  return API.post("api/v1/contract", formData, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const getContractByUser = () => {
  const token = getToken();
  return API.get("api/v1/contract", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const getContractByStaff = (limit, page) => {
  const token = getToken();
  return API.get(`api/v1/contract/all?limit=${limit}&page=${page}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const editContract = (formEdit, id) => {
  const token = getToken();
  return API.put(`api/v1/contract/${id}`, formEdit, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
