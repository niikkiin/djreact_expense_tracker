import axios from "axios";
import { getErrors } from "../messages/message.actions";

// types
import { TransactionActionTypes } from './transaction.types';

export const getTransactions = () => {
  return (dispatch) => {
    axios
      .get("api/transactions/")
      .then((res) => {
        dispatch({
          type: TransactionActionTypes.GET_TRANSACTIONS,
          payload: res.data
        });
      })
      .catch((err) => {
        dispatch(getErrors(err.response.data, err.response.status));
      })
  }
};

export const addTransaction = (transaction) => {
  return (dispatch) => {
    axios
      .post("http://127.0.0.1:3000/api/transactions/", transaction)
      .then((res) => {
        dispatch({
          type: TransactionActionTypes.ADD_TRANSACTION,
          payload: res.data
        });
      })
      .catch((err) => {
        // dispatch(getErrors(err.response.data, err.response.status));
        console.log(err);
      });
  }
}