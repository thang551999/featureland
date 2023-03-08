import axios, { AxiosResponse } from '@/libs/axios-wrapper';

const addToken = (token: string) => {
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
};

const removeToken = () => {
  delete axios.defaults.headers.common.Authorization;
};

const invoke = async (
  method: 'get' | 'put' | 'post' | 'delete',
  url: string,
  body?: any,
  params?: any,
  otherConfig?: any
) => {
  return axios
    .request({
      method: method,
      data: body,
      url: url,
      params: params,
      ...otherConfig,
    })
    .then((response: AxiosResponse) => {
      // add middleware from handle error here
      return response.data;
    });
};

const _get = async (url: string, params?: any) => {
  return invoke('get', url, null, params);
};
const _post = async (url: string, body?: any) => {
  return invoke('post', url, body);
};
const _put = async (url: string, body?: any) => {
  return invoke('put', url, body);
};
const _delete = async (url: string, body?: any) => {
  return invoke('delete', url, body);
};

export default {
  get: _get,
  post: _post,
  put: _put,
  delete: _delete,
  addToken: addToken,
  removeToken: removeToken,
};
