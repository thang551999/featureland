import { API_URL } from '@/constants';
import api from './api.service';

export const getArea = (areaId?: string) => {
  return api.get(API_URL.GET_AREA + areaId);
};

export const getPlots = (params: any) => {
  return api.get(API_URL.GET_PLOTS, params);
};
