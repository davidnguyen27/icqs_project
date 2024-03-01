import { Api } from "../Utils/Api";
import { getToken } from "../Utils/Token";

const API = Api();
const token = getToken();
export const getUser = (limit, page) => {
  return API.get(`/api/v1/user/require?limit=${limit}&page=${page}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const editUser = (formEdit, id) => {
  return API.put(`/api/v1/user/${id}`, formEdit, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
