import { combineReducers } from 'redux';
import { reducer as repository } from './repository';

export default combineReducers({
  repository,
});
