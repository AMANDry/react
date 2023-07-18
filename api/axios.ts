import 'react-toastify/dist/ReactToastify.css';

import axios from 'axios';
import { toast } from 'react-toastify';

export const axiosInstance = axios.create({
  baseURL: `${process.env.SERVER_URI}/api/v1`,
});

export const LOGIN_URL = '/oauth2/token/healthcheck';

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('access_token');

    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
      config.headers['Access-Control-Allow-Credentials'] = 'true';
    }

    return config;
  },
  (error) => {
    toast.error('Opps, error occured', {
      theme: 'colored',
    });
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (res) => res,
  (error) => {
    if (error.response.status === 401) {
      localStorage.removeItem('access_token');
      toast.error('Looks like you are unauthorized, please login', {
        theme: 'colored',
      });
    }

    return Promise.reject(error);
  }
);
