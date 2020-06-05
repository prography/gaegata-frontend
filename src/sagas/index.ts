import { all, fork } from 'redux-saga/effects';
import authSaga from './auth';
import teamSaga from './team';
import applyTeamSage from './apply';

function* rootSaga() {
  yield all([fork(authSaga), fork(teamSaga), fork(applyTeamSage)]);
}

export default rootSaga;
