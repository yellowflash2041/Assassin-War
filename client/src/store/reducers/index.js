import { combineReducers } from 'redux';

import auth from './auth';
import error from './error';
import { currentPoll, polls } from './polls';

export default combineReducers({
  auth,
  currentPoll,
  error,
  polls
});