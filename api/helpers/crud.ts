import { AxiosPromise, AxiosRequestConfig } from 'axios';

import { toUrlParams } from '../../helpers/parseParams';

export interface CrudOptions {
  baseURL: string;
  request: (config: AxiosRequestConfig) => AxiosPromise;
  id?: string;
}

export default class Crud {
  id = 'id';
  baseURL = '';
  request: <T>(config: AxiosRequestConfig) => AxiosPromise<T>;

  constructor({ baseURL, request, id }: CrudOptions) {
    this.id = id || this.id;
    this.baseURL = baseURL;
    this.request = request;
  }

  create = <T, U>(data: T) =>
    this.request<U>({
      data,
      method: 'POST',
      url: this.baseURL
    });

  read = <T extends { [key: string]: any }, U>(params?: T) =>
    this.request<U>({
      params,
      method: 'GET',
      url:
        params && params[this.id]
          ? `${this.baseURL}/${params[this.id]}`
          : this.baseURL,
      paramsSerializer: params => toUrlParams(params)
    });

  update = <T extends { [key: string]: any }, U>(data: T) =>
    this.request<U>({
      data,
      method: 'PUT',
      url: `${this.baseURL}/${data[this.id]}`
    });

  delete = <T extends { [key: string]: any }, U>(params: T) =>
    this.request<U>({
      params,
      method: 'DELETE',
      url: `${this.baseURL}/${params[this.id]}`
    });
}
