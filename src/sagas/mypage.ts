import { all, fork, call, take } from 'redux-saga/effects';
import { fetchEntity } from 'utils/saga';
import {
  myPageEntity,
  MY_PAGE,
  getMyApplicationListEntity,
  GET_MY_APPLICATION_LIST,
  getMyTeamListEntity,
  GET_MY_TEAM_LIST,
} from 'store/mypage/action';

const fetchMyPage = fetchEntity(myPageEntity);
const fetchGetMyApplicationList = fetchEntity(getMyApplicationListEntity);
const fetchGetMyTeamList = fetchEntity(getMyTeamListEntity);

function* watchMyPage() {
  while (true) {
    yield take(MY_PAGE);
    yield call(fetchMyPage);
  }
}

function* watchGetMyApplicationList() {
  while (true) {
    yield take(GET_MY_APPLICATION_LIST);
    yield call(fetchGetMyApplicationList);
  }
}

function* watchGetMyTeamList() {
  while (true) {
    yield take(GET_MY_TEAM_LIST);
    yield call(fetchGetMyTeamList);
  }
}

export default function* root() {
  yield all([
    fork(watchMyPage),
    fork(watchGetMyApplicationList),
    fork(watchGetMyTeamList),
  ]);
}
