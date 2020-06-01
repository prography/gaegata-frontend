import { all, fork, call, take } from 'redux-saga/effects';
import { fetchEntity } from '../utils/saga';
import {
  createTeamEntity,
  CreateTeam,
  CREAT_TEAM,
  DetailTeam,
  DETAIL_TEAM,
  detailTeamEntity,
} from '../store/team/action';

const fetchCreateTeam = fetchEntity(createTeamEntity);
const fetchDetailTeam = fetchEntity(detailTeamEntity);

function* watchCreateTeam() {
  while (true) {
    const { params }: CreateTeam = yield take(CREAT_TEAM);
    yield call(fetchCreateTeam, params);
  }
}

function* watchDetailTeam() {
  while (true) {
    const { params }: DetailTeam = yield take(DETAIL_TEAM);
    yield call(fetchDetailTeam, params);
  }
}

export default function* root() {
  yield all([fork(watchCreateTeam), fork(watchDetailTeam)]);
}
