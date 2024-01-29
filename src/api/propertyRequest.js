import axios from "axios";
const API = axios.create({ baseURL: "http://localhost:5000" });

export const getSearchProperties = (search, page, limit) =>
  API.get(`/api/v1/property?name=${search}&page=${page}&limit=${limit}`);

// export const getPropertyById = (id) => API.get(`/api/v1/property/${id}`);
