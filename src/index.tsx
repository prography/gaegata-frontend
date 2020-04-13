import React from 'react';
import ReactDOM from 'react-dom';
import App from 'Root';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import createStore from 'store/createStore';

import 'antd/dist/antd.css';
import 'styles/reset.css';

const store = createStore();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
