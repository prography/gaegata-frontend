import { all, fork, call, take, put } from 'redux-saga/effects';
import authApi from 'lib/api/auth';
import {
  AuthAction,
  authStatusActions,
  Login,
  loginActions,
  SetLoggedInfo,
  setLoggedAction,
} from 'actions/auth';
import authUtil from 'utils/storage';
import * as types from 'constants/ActionTypes';

export function* fetchLogin(action: Login) {
  try {
    const { data } = yield call(authApi.postLogin, action.payload);
    authUtil.set('USER-KEY', data.access);
    yield put<AuthAction>(loginActions.loginSuccess(data));
  } catch (error) {
    yield put<AuthAction>(loginActions.loginFailure());
  }
}

function* watchFetchLogin() {
  while (true) {
    const action: AuthAction = yield take(types.POST_LOGIN[types.REQUEST]);
    yield fork(fetchLogin, action);
  }
}

export function* fetchAuthStatus(action: Login) {
  try {
    const { data } = yield call(authApi.getAuthStatus, action.payload);
    yield put<AuthAction>(loginActions.loginSuccess(data));
  } catch (error) {
    yield put<AuthAction>(loginActions.loginFailure());
  }
}

function* watchFetchAuthStatus() {
  while (true) {
    const action: AuthAction = yield take(
      types.POST_AUTH_STATUS[types.REQUEST],
    );
    yield fork(fetchAuthStatus, action);
  }
}

function* getMyUserDetail(token: string) {
  try {
    const { data } = yield call(authApi.getAuthStatus, token);
    yield put<AuthAction>(authStatusActions.authStatusSuccess(data));
  } catch (error) {
    yield put<AuthAction>(authStatusActions.authStatusFailure());
  }
}

export default function* root() {
  yield all([fork(watchFetchLogin), fork(watchFetchAuthStatus)]);

  //새로고침시 로컬스터리지 확인
  const token = authUtil.get('USER-KEY');

  if (token) {
    yield put<SetLoggedInfo>(setLoggedAction());
    yield getMyUserDetail(token);
  }
}
