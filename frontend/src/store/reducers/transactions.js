import * as actionTypes from '../actions/types';
import { updateObject } from '../utility';

const initialState = {
  transactions: [],
};

const getTransactions = (state, action) => {
  return updateObject(state, {transactions: action.payload});
} 

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case actionTypes.GET_TRANSACTIONS: return getTransactions(state, action);
  }
}

export default reducer;