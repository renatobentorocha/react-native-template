import { call, put } from 'redux-saga/effects';

import api from '~/services/api';

import RepositoryActions from '~/store/ducks/repository';

export function* loadRepository(action) {
  try {
    const { repo, org } = action;

    const { data } = yield call(
      api.get,
      `/search/repositories?q=${repo}+org:${org}`
    );

    console.tron.log(data);
    yield put(RepositoryActions.loadRepositorySuccess(data.items));
  } catch (error) {
    yield put(RepositoryActions.Failure(error));
  }
}
