import { ApiError } from '../api/types';

export interface ResponseState {
  isError: boolean;
  isPending: boolean;
  error?: ApiError;
}

export interface PaginationParams {
  limit: number;
  offset: number;
}

export interface ResponseListState<T> extends ResponseState, PaginationParams {
  list: T[];
  count: number;
}
