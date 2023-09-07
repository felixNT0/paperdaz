import axios from "axios";

const BASE_URL = import.meta.env.VITE_APP_API_URL;

const ApiAxiosInstance = axios.create({
  baseURL: BASE_URL,
});

export default ApiAxiosInstance;
