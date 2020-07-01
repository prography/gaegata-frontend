import { all, fork, call, take } from 'redux-saga/effects';
import { fetchEntity } from '../utils/saga';
import {
  GET_COMMENTS,
  GetComments,
  getCommentsEntity,
} from '../store/comment/action';

const fetchGetComments = fetchEntity(getCommentsEntity);

function* watchGetComments() {
  while (true) {
    const { params }: GetComments = yield take(GET_COMMENTS);
    yield call(fetchGetComments, params);
  }
}

export default function* root() {
  yield all([fork(watchGetComments)]);
}
