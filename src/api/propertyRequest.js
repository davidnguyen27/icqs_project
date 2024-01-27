import axios from 'axios';
const API = axios.create({ baseURL: 'http://localhost:5000' });

export const getSearchProperties = (search) => API.get(`/api/v1/property?name=${search}`);

// export const getPropertyById = (id) => API.get(`/api/v1/property/${id}`);
