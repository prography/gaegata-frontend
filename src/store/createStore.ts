import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import State from 'store';
import rootSaga from 'sagas';

const sagaMiddleware = createSagaMiddleware();
const isDevelopment = process.env.NODE_ENV === 'development';

const configure = () => {
  /* 개발 모드일 때 리덕스 크롬 확장 프로그램 실행 */
  const composeEnhancers =
    (isDevelopment && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
    compose;

  const middlewares = applyMiddleware(sagaMiddleware);
  const store = createStore(State, composeEnhancers(middlewares));

  // middleware 실행
  sagaMiddleware.run(rootSaga);

  return store;
};

export default configure;
