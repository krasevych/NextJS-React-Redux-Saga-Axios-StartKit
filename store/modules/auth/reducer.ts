import { Reducer } from 'redux';

import {
  AuthActions,
  LOGOUT,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_ERROR
} from './actions';
import { AuthState } from './types';

const initialAuthState: AuthState = {
  user: null,
  isError: false,
  isPending: false,
  isLoggedIn: false
};

const authReducer: Reducer<AuthState, AuthActions> = (
  state = initialAuthState,
  action
) => {
  switch (action.type) {
    case LOGOUT: {
      return initialAuthState;
    }
    case LOGIN_REQUEST: {
      return {
        ...state,
        isError: false,
        isPending: true
      };
    }
    case LOGIN_SUCCESS: {
      const { payload: newUser } = action;
      return {
        ...state,
        user: newUser,
        isPending: false,
        isLoggedIn: true
      };
    }
    case LOGIN_ERROR: {
      const { payload: newError } = action;
      return {
        ...state,
        error: newError,
        isError: true,
        isPending: false,
        isLoggedIn: false
      };
    }
    default:
      return state;
  }
};

export default authReducer;
