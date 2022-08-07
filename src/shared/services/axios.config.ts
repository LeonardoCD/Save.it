import axios, { AxiosError } from "axios";

export const api = axios.create({
  baseURL: "https://viacep.com.br/ws",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

api.interceptors.request.use(
  async (config) => {
    return config;
  },
  function (err) {
    return Promise.reject(err);
  }
);

api.interceptors.response.use(
  async (response) => {
    return response;
  },
  function (error: AxiosError) {
    if (error.response) {
      const handlerError = error.response;
      return Promise.reject(handlerError);
    }
    return Promise.reject(error);
  }
);