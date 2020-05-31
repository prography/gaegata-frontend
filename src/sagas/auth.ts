import { all, fork, call, take, put, takeLatest } from 'redux-saga/effects';
import * as authApi from '../api/auth';
import { fetchEntity } from 'utils/saga';
import {
  registerEntity,
  REGISTER,
  Register,
  loginEntity,
  LOGIN,
  Login,
  EMAIL_CHECK,
  EmailCheck,
  emailCheckEntity,
  meEntity,
  ME,
  Me,
} from 'store/auth/action';

const fetchRegister = fetchEntity(registerEntity);
const fetchLogin = fetchEntity(loginEntity);
const fetchEmail = fetchEntity(emailCheckEntity);
const fetchMe = fetchEntity(meEntity);

function* watchRegister() {
  while (true) {
    const { params }: Register = yield take(REGISTER);
    yield call(fetchRegister, params);
  }
}

function* watchLogin() {
  while (true) {
    const { params }: Login = yield take(LOGIN);
    yield call(fetchLogin, params);
  }
}

function* watchEmailCheck() {
  while (true) {
    const { params }: EmailCheck = yield take(EMAIL_CHECK);
    yield call(fetchEmail, params);
  }
}

function* watchMe() {
  while (true) {
    const { token }: Me = yield take(ME);
    yield call(fetchMe, token);
  }
}

export default function* root() {
  yield all([
    fork(watchLogin),
    fork(watchRegister),
    fork(watchEmailCheck),
    fork(watchMe),
  ]);
}
