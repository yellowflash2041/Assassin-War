import API from './../../services/api';
import { addError, removeError } from './error';
import { SET_CURRENT_POLL, SET_POLLS } from './../actionTypes';

const createPoll = data => {
  return async dispatch => {
    try {
      const poll = await API.call('post', 'polls', data);
      dispatch(setCurrentPoll(poll));
      dispatch(removeError());
    } catch (err) {
      const { error } = err.response.data;
      dispatch(addError(error));
    }
  };
};

const getCurrentPoll = path => {
  return async dispatch => {
    try {
      const poll = await API.call('get', `polls/${path}`);
      dispatch(setCurrentPoll(poll));
      dispatch(removeError());
    } catch (err) {
      const { error } = err.response.data;
      dispatch(addError(error));
    }
  };
};

const getPolls = () => {
  return async dispatch => {
    try {
      const polls = await API.call('get', 'polls');
      dispatch(setPolls(polls));
      dispatch(removeError());
    } catch (err) {
      const { error } = err.response.data;
      dispatch(addError(error));
    }
  };
};

const getUserPolls = () => {
  return async dispatch => {
    try {
      const polls = await API.call('get', 'polls/user');
      dispatch(setPolls(polls));
      dispatch(removeError());
    } catch (err) {
      const { error } = err.response.data;
      dispatch(addError(error));
    }
  };
};

const setCurrentPoll = poll => ({
  type: SET_CURRENT_POLL,
  poll
});

const setPolls = polls => ({
  type: SET_POLLS,
  polls
});

const vote = (path, data) => {
  return async dispatch => {
    try {
      const poll = await API.call('post', `polls/${path}`, data);
      dispatch(setCurrentPoll(poll));
    } catch (err) {
      const { error } = err.response.data;
      dispatch(addError(error));
    }
  };
};

export { createPoll, getCurrentPoll, getPolls, getUserPolls, setCurrentPoll, setPolls, vote };