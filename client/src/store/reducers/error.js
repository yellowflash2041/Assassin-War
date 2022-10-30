import { ADD_ERROR, REMOVE_ERROR } from './../actionTypes';

const error = (state = { message: null }, action) => {
  switch (action.type) {
    case ADD_ERROR:
      return { message: action.error, ...state };
    case REMOVE_ERROR:
      return { message: null, ...state };
    default:
      return state;
  }
};

export default error;