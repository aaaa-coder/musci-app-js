import axios from "axios";

const service = axios.create({
  baseURL: "http://localhost:3000",
  timeout: 20000,
});

service.interceptors.request.use(
  (res) => {
    return res;
  },
  (error) => {
    return Promise.reject(error);
  }
);
export default service;
