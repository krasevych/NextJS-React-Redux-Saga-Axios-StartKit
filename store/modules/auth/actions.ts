import { User } from '../../../api/modules/auth';
import { createAction, ActionUnion } from '../../helpers/createAction';

import { ApiError } from '../../../api/types';

export const LOGOUT = 'LOGOUT';

export const LOGIN_REQUEST = 'LOGIN';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';

export const authActions = {
  logout: () => createAction(LOGOUT),

  loginRequest: () => createAction(LOGIN_REQUEST),
  loginSuccess: (user: User) => createAction(LOGIN_SUCCESS, user),
  loginError: (error: ApiError) => createAction(LOGIN_ERROR, error)
};

export type AuthActions = ActionUnion<typeof authActions>;
