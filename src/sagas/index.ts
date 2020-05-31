import { all, fork } from 'redux-saga/effects';
import authSaga from './auth';
import teamSaga from './team';

function* rootSaga() {
  yield all([fork(authSaga), fork(teamSaga)]);
}

export default rootSaga;
