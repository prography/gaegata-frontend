import { all, fork, call, take } from 'redux-saga/effects';
import { fetchEntity } from '../utils/saga';
import {
  UserProfileFuck,
  USER_PROFILE_FUCK,
  userProfileFuckEntity,
} from '../store/profile/action';

const fetchUserProfile = fetchEntity(userProfileFuckEntity);

function* watchUserProfileFuck() {
  while (true) {
    const { user_id }: UserProfileFuck = yield take(USER_PROFILE_FUCK);
    yield call(fetchUserProfile, user_id);
  }
}

export default function* root() {
  yield all([fork(watchUserProfileFuck)]);
}
