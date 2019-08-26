import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import { persistStore } from 'redux-persist';
import persistedReducer from './persisteRedux';

import sagas from './sagas';

const middlewares = [];

const sagaMonitor = __DEV__ ? console.tron.createSagaMonitor() : null;

const sagaMiddleWare = createSagaMiddleware({ sagaMonitor });

middlewares.push(sagaMiddleWare);

const composer = __DEV__
  ? compose(
      applyMiddleware(...middlewares),
      console.tron.createEnhancer()
    )
  : applyMiddleware(...middlewares);

const store = createStore(persistedReducer, composer);
const persistor = persistStore(store);

sagaMiddleWare.run(sagas);

export { persistor, store };
