import axios, { AxiosRequestConfig } from "axios";
import { LocalStorageAdapter } from "core/adapter/LocalStorageAdapter";

const API_REST_ENDPOINT_BASE = "http://localhost:3001";
const HttpRestApi = axios.create({
  baseURL: API_REST_ENDPOINT_BASE,
});

const HttRestApiWithInterceptor = axios.create({
  baseURL: API_REST_ENDPOINT_BASE,
});

HttRestApiWithInterceptor.interceptors.request.use(
  (request: AxiosRequestConfig) => {
    request.headers.Authorization = `Bearer ${LocalStorageAdapter.token}`;
    return request;
  }
);

export  { HttpRestApi, HttRestApiWithInterceptor };
