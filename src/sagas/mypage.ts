import { all, fork, call, take } from 'redux-saga/effects';
import { fetchEntity } from 'utils/saga';
import {
  myPageEntity,
  MY_PAGE,
  getMyApplicationListEntity,
  GET_MY_APPLICATION_LIST,
} from 'store/mypage/action';

const fetchMyPage = fetchEntity(myPageEntity);
const fetchGetMyApplicationList = fetchEntity(getMyApplicationListEntity);

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

export default function* root() {
  yield all([fork(watchMyPage), fork(watchGetMyApplicationList)]);
}
