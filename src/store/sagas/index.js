import { all, takeLatest } from 'redux-saga/effects';
import { RepositoryTypes } from '~/store/ducks/repository';
import { loadRepository } from './repository';

export default function* rootSaga() {
  yield all([
    takeLatest(RepositoryTypes.LOAD_REPOSITORY_REQUEST, loadRepository),
  ]);
}
