import axios from "axios";

const API_REST_ENDPOINT_BASE = "http://localhost:3001";
const HttpRestApi = axios.create({
  baseURL: API_REST_ENDPOINT_BASE,
});

export default HttpRestApi;
