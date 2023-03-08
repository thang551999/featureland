import { QUERY_KEY } from '@/constants';
import { getArea, getPlots } from '@/services/area';
import { useQuery } from 'react-query';

export const useGetArea = (areaId?: string) => {
  return useQuery([QUERY_KEY.GET_REGION, areaId], () => getArea(areaId), {
    enabled: areaId !== 'undefined' && areaId !== 'null' && areaId !== '',
  });
};

export const useGetPlots = (areaId?: string, params?: any) => {
  return useQuery(
    [QUERY_KEY.GET_PLOTS, areaId, params],
    () => getPlots({ regionId: areaId, ...params }),
    {
      select: (res) => res.data,
      enabled: areaId !== 'null' && areaId !== 'undefined' && areaId !== '',
    }
  );
};
