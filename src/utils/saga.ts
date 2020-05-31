import { call, put } from 'redux-saga/effects';

// entity fetch
export const fetchEntity = ({
  request,
  success,
  failure,
  api,
}: EntitySchema) => {
  return function*(...args: any[]) {
    yield put(request());

    try {
      const response = yield call(api, ...args);

      yield put(success(response));
    } catch (err) {
      yield put(failure());
    }
  };
};
