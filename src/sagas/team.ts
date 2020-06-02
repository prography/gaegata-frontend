import { all, fork, call, take } from 'redux-saga/effects';
import { fetchEntity } from '../utils/saga';
import {
  createTeamEntity,
  CreateTeam,
  CREAT_TEAM,
  DetailTeam,
  DETAIL_TEAM,
  detailTeamEntity,
  ListTeam,
  LIST_TEAM,
  listTeamEntity,
} from '../store/team/action';

const fetchCreateTeam = fetchEntity(createTeamEntity);
const fetchDetailTeam = fetchEntity(detailTeamEntity);
const fetchListTeam = fetchEntity(listTeamEntity);
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

function* watchListTeam() {
  while (true) {
    const { params }: ListTeam = yield take(LIST_TEAM);
    yield call(fetchListTeam, params);
  }
}

export default function* root() {
  yield all([
    fork(watchCreateTeam),
    fork(watchDetailTeam),
    fork(watchListTeam),
  ]);
}
