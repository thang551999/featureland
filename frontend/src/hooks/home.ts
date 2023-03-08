import { QUERY_KEY } from '@/constants';
import { setToken } from '@/redux/authentication/slice';
import { AppDispatch } from '@/redux/configStore';
import api from '@/services/api.service';
import { auth, getAreas } from '@/services/home';
import { useMutation, useQuery } from 'react-query';

export const useGetAreas = () => {
  return useQuery([QUERY_KEY.GET_REGIONS], getAreas, {
    select: (res) => res.data,
  });
};

export const useAuthenticate = (dispatch: AppDispatch) => {
  return useMutation([QUERY_KEY.AUTH], auth, {
    onSuccess: (result) => {
      if (result?.data?.token) {
        api.addToken(result.data.token);
        dispatch(setToken(result.data.token));
      }
    },
  });
};
