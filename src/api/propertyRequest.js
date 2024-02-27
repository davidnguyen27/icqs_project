import axios from "axios";
import { getToken } from "../Utils/Token";
import { Api } from "../Utils/Api";

const API = Api();

export const getSearchProperties = (search, page, limit) => {
  const token = getToken();

  return API.get(
    `/api/v1/property?name=${search}&page=${page}&limit=${limit}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};
