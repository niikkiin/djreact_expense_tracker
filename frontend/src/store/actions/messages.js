import * as actionTypes from './types';

// GET ERRORS
export const getErrors = (msg, status) => {
  return {
    type: actionTypes.GET_ERRORS,
    payload: { msg, status },
  };
};