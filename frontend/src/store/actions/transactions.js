import * as actionTypes from './types';
import axios from 'axios';
import { getErrors } from './messages';

// GET TRANSACTIONS 
export const getTransactions = () => {
  return (dispatch) => {
    axios
      .get("api/transactions")
      .then((res) =>{
        dispatch({
          type: actionTypes.GET_TRANSACTIONS,
          payload: res.data,
        });
      })
      .catch((err) => {
        dispatch(getErrors(err.response.data, err.response.status));
      });
  };
};