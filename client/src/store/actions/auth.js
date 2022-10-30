import API from './../../services/api';
import { addError, removeError } from './error';
import { SET_CURRENT_USER } from './../actionTypes';

const authUser = (path, data) => {
  return async dispatch => {
    try {
      const { token, ...user } = await API.call('post', `auth/${path}`, data);
      localStorage.setItem('jwtToken', token);
      API.setToken(token);
      dispatch(setCurrentUser(user));
      dispatch(removeError());
    } catch (err) {
      const { error } = err.response.data;
      dispatch(addError(error));
    }
  };
};

const logout = () => {
  return dispatch => {
    localStorage.clear();
    API.setToken(null);
    dispatch(setCurrentUser({}));
    dispatch(removeError());
  };
};

const setCurrentUser = user => ({
  type: SET_CURRENT_USER,
  user
});

const setToken = token => {
  API.setToken(token);
};

export { authUser, logout, setCurrentUser, setToken };