import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/**
 * Actions types and creators
 */

const { Types, Creators } = createActions({
  loadRepositoryRequest: ['repo', 'org'],
  loadRepositorySuccess: ['data'],
  Failure: ['error'],
});

/**
 * loadRequest: () => ({type: Type.LOAD_REQUEST}),
 * loadSuccess: data => ({type: Type.LOAD_SUCCESS, data}),
 * loadFailure: () => ({type: Type.LOAD_FAILURE}),
 */

export const RepositoryTypes = Types;
export default Creators;

/**
 * Initial state
 */

const INITIAL_STATE = Immutable({
  data: [],
  error: null,
  loading: false,
});

export const reducer = createReducer(INITIAL_STATE, {
  [Types.LOAD_REPOSITORY_REQUEST]: state => state.merge({ loading: true }),

  [Types.LOAD_REPOSITORY_SUCCESS]: (state, { data }) =>
    state.merge({
      data,
      loading: false,
    }),

  [Types.FAILURE]: (state, { error }) => state.merge({ error, loading: false }),
});
