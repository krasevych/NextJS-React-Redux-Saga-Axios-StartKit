import { combineReducers, Reducer } from 'redux';

import authReducer, { AuthState } from './modules/auth';

export interface ApplicationState {
  auth: AuthState;
}

const createReducer = (): Reducer<ApplicationState> =>
  combineReducers<ApplicationState>({
    auth: authReducer
  });

export default createReducer;
