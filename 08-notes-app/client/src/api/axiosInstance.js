import axios from "axios";

const axiosInstance = axios.create({
  // baseURL: "http://localhost:3000/api",
  baseURL: "http://8.147.232.206:3000/api",
  withCredentiasls: true,
});
export default axiosInstance;
