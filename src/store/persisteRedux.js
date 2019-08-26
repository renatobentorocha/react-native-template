import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import {
  seamlessImmutableReconciler,
  seamlessImmutableTransformCreator,
} from 'redux-persist-seamless-immutable';
import reducers from './ducks';

const transformerConfig = {
  whitelistPerReducer: {},
  blacklistPerReducer: {},
};

const persistConfig = {
  key: 'root',
  storage,
  stateReconciler: seamlessImmutableReconciler,
  transforms: [seamlessImmutableTransformCreator(transformerConfig)],
};

const persistedReducer = persistReducer(persistConfig, reducers);

export default persistedReducer;
