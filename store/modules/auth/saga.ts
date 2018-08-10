import { take, put, call } from 'redux-saga/effects';

import { authActions, LOGOUT, LOGIN_REQUEST } from './actions';
import api from '../../../api';

function* login() {
  while (true) {
    yield take(LOGIN_REQUEST);
    try {
      const user = yield call(api().auth.login);
      yield put(authActions.loginSuccess(user));
    } catch (e) {
      yield put(authActions.loginError(e));
    }
  }
}

function* logout() {
  while (true) {
    yield take(LOGOUT);
    yield put(authActions.logout());
  }
}

const authSaga = [call(login), call(logout)];

export default authSaga;
