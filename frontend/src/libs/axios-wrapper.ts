import originAxios from 'axios';
import axiosRetry from 'axios-retry';

const defaultHeader = {
  'Content-Type': 'application/json',
  Accept: 'application/json',
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers':
    'Origin, X-Requested-With, Content-Type, Accept',
};
const axios = originAxios.create({
  baseURL: process.env.API_ENDPOINT,
  timeout: 5000,
  headers: defaultHeader,
});

const retryDelay = (retryNumber = 0) => {
  const seconds = Math.pow(2, retryNumber) * 1000;
  const randomMs = 1000 * Math.random();
  return seconds + randomMs;
};

axiosRetry(axios, {
  retries: 2,
  retryDelay,
  // retry on Network Error & 5xx responses
  retryCondition: axiosRetry.isRetryableError,
});

export * from 'axios';
export default axios;
export { defaultHeader };
