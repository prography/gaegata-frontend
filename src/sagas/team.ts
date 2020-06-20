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
  const { params }: CreateTeam = yield take(CREAT_TEAM);
  yield call(fetchCreateTeam, params);
}

function* watchDetailTeam() {
  const { params }: DetailTeam = yield take(DETAIL_TEAM);
  yield call(fetchDetailTeam, params);
}

function* watchListTeam() {
  const { params }: ListTeam = yield take(LIST_TEAM);
  yield call(fetchListTeam, params);
}

export default function* root() {
  yield all([
    fork(watchCreateTeam),
    fork(watchDetailTeam),
    fork(watchListTeam),
  ]);
}
