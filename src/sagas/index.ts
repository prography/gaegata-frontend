import { all, fork } from 'redux-saga/effects';
import authSaga from './auth';
import teamSaga from './team';
import applyTeamSage from './apply';
import myPageSaga from './mypage';

function* rootSaga() {
  yield all([
    fork(authSaga),
    fork(teamSaga),
    fork(applyTeamSage),
    fork(myPageSaga),
  ]);
}

export default rootSaga;
