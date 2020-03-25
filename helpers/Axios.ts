import axios, { AxiosError } from "axios";

axios.defaults.baseURL = "http://localhost:3000";

axios.interceptors.request.use(request => {
  return request;
});

axios.interceptors.response.use(
  response => {
    return response;
  },
  (error: AxiosError) => {
    console.log(error);
    return error.response.data;
  }
);

export default axios;
