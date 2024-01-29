import axios from 'axios';
import {getCookie } from "cookies-next";

const axiosInstance = axios.create();

axiosInstance.interceptors.request.use((config) => {
  const token = getCookie("jwt");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});


export default axiosInstance;