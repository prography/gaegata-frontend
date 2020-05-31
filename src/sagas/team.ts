import { all, fork, call, take } from 'redux-saga/effects';
import { fetchEntity } from '../utils/saga';
import { createTeamEntity, CreateTeam, CREAT_TEAM } from '../store/team/action';

const fetchCreateTeam = fetchEntity(createTeamEntity);

function* watchCreateTeam() {
  while (true) {
    const { params }: CreateTeam = yield take(CREAT_TEAM);
    yield call(fetchCreateTeam, params);
  }
}

export default function* root() {
  yield all([fork(watchCreateTeam)]);
}
