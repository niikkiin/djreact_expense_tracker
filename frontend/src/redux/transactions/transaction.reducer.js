// types
import { TransactionActionTypes } from "./transaction.types";

const INITIAL_STATE = {
  transactions: [],
};

const transactionReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TransactionActionTypes.GET_TRANSACTIONS:
      return {
        ...state,
        transactions: action.payload,
      };
    case TransactionActionTypes.ADD_TRANSACTION:
      return {
        ...state,
        transactions: [...state.transactions, action.payload],
      };
    default:
      return state;
  }
};

export default transactionReducer;
