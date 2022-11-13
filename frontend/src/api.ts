import axios from "axios";

const http = axios.create({
  baseURL: "http://localhost:3000",
});

const Api = {
  get: http.get,
  post: http.post,
  put: http.put,
  delete: http.delete,
};

export default Api;
