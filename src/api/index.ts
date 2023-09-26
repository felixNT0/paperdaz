import axios from "axios";

const BASE_URL = import.meta.env.VITE_APP_DEV_API_URL;
const DEV_BASE_URL = import.meta.env.VITE_APP_DEV_API_URL;

export const ApiAxiosInstance = axios.create({
  baseURL: BASE_URL,
});

export const DevApiAxiosInstance = axios.create({
  baseURL: DEV_BASE_URL,
});
