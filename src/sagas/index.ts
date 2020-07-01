import { all, fork } from 'redux-saga/effects';
import authSaga from './auth';
import teamSaga from './team';
import applyTeamSage from './apply';
import myPageSaga from './mypage';
import commentSaga from './comment';

function* rootSaga() {
  yield all([
    fork(authSaga),
    fork(teamSaga),
    fork(applyTeamSage),
    fork(myPageSaga),
    fork(commentSaga),
  ]);
}

export default rootSaga;
