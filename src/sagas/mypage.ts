import { all, fork, call, take } from 'redux-saga/effects';
import { fetchEntity } from 'utils/saga';
import { myPageEntity, MY_PAGE } from 'store/mypage/action';

const fetchMyPage = fetchEntity(myPageEntity);

function* watchMyPage() {
  yield take(MY_PAGE);
  yield call(fetchMyPage);
}

export default function* root() {
  yield all([fork(watchMyPage)]);
}
