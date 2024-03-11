import { Api } from "../Utils/Api";
import { getToken } from "../Utils/Token";

const API = Api();

export const getUser = (limit, page, email) => {
  const token = getToken();
  return API.get(
    `/api/v1/user/require?limit=${limit}&page=${page}&email=${email}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};

export const editUser = (formEdit, id) => {
  const token = getToken();
  return API.put(`/api/v1/user/${id}`, formEdit, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
