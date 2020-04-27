import { combineReducers } from 'redux';

// reducers
import transactionReducer from './transactions/transaction.reducer';


export const rootReducer = combineReducers({
  transactions: transactionReducer,
});

export default rootReducer;