import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

import config from '../../config';
import { createRequestParams, ApiError } from '../types';

const createRequest = ({ baseURL }: createRequestParams) => {
  const requester = axios.create({ baseURL });

  requester.interceptors.response.use(res => {
    const { errorCode, errorMessage } = res.data;

    if (res.status === 200 && errorCode && errorCode >= 400) {
      res.status = errorCode;
      res.statusText = errorMessage;
      return Promise.reject(res);
    }

    return res;
  });

  const errorHandler = (err: AxiosResponse<ApiError>) => {
    const details = (err.data && err.data.errorMessage) || 'no response';

    if (!config.isProd) {
      const message = `Api error - details: ${details}`;
      console.error(message);
    }

    return Promise.reject(details);
  };

  const request = (config: AxiosRequestConfig) =>
    requester(config)
      .then(r => r.data)
      .catch(errorHandler);

  return {
    request,
    axiosInstance: requester
  };
};

export default createRequest;
