import axios from "axios";
import settings from "../settings";

axios.defaults.baseURL = settings.host;

axios.interceptors.request.use(req => {
  return req;
});

axios.interceptors.response.use(
  res => {
    return res.data;
  },
  err => {
    console.log(err.response);
    return err.response.data;
  }
);

export default axios;
