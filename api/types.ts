import { AxiosPromise, AxiosRequestConfig } from 'axios';

export interface createRequestParams {
  baseURL: string;
}

export interface Size {
  width: number;
  height: number;
}

export interface ApiError {
  errorCode: string;
  errorMessage: string;
}

export interface ApiConfig {
  token?: string;
  baseURL: string;
}
export type Request = <T>(config: AxiosRequestConfig) => AxiosPromise<T>;

export interface ListParams {
  limit?: number;
  offset?: number;
}
