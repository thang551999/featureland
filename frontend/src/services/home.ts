import { API_URL } from '@/constants';
import api from './api.service';

export const getAreas = () => {
  return api.get(API_URL.GET_AREAS);
};

export const auth = (body: any) => {
  return api.post(API_URL.AUTH, body);
};
