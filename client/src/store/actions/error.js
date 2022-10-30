import { ADD_ERROR, REMOVE_ERROR } from './../actionTypes';

const addError = error => ({
  type: ADD_ERROR,
  error
});

const removeError = () => ({
  type: REMOVE_ERROR
});

export { addError, removeError };