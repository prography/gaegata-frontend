import { createStore, Store, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import State from 'store';
import rootSaga from 'sagas';

//saga 미들웨어 생성
const sagaMiddleware = createSagaMiddleware();
const middleWares = applyMiddleware(sagaMiddleware);

// 개발환경일때만 크롬 확장프로그램 추가
const composeEnhancers =
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const configureStore = (): Store => {
  const store: Store = createStore(State, composeEnhancers(middleWares));

  sagaMiddleware.run(rootSaga);
  return store;
};

export default configureStore;
