import { all } from 'redux-saga/effects';
import { authSaga } from './modules/auth';

function* rootSaga() {
  yield all([authSaga]);
}

export default rootSaga;
