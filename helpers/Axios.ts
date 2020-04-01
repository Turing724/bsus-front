import axios, { AxiosError } from "axios";
import environment from "../environment";

axios.defaults.baseURL = environment.host;

axios.interceptors.request.use(request => {
  return request;
});

axios.interceptors.response.use(
  response => {
    return response;
  },
  (err: AxiosError) => {
    if (err === undefined || err.code === "ECONNABORTED" || err.response === undefined) {
      return Promise.reject(err);
    }

    const { response } = err;

    return response;
  }
);

export default axios;
