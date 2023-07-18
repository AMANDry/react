import { RegisterInput } from '../pages/customer-create';
import { Regions } from '../types/common';
import { axiosInstance, LOGIN_URL } from './axios';

export const requestLogin = () => {
  return axiosInstance.get(LOGIN_URL);
};

export const createCustomer = (data: RegisterInput) => {
  return axiosInstance.post('/customers', data);
};

export const getRegions = () => {
  return axiosInstance.get<Regions[]>('/cloud/regions');
};
