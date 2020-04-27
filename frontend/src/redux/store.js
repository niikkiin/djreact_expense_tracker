import { createStore, applyMiddleware } from 'redux';

import { composeWithDevTools } from "redux-devtools-extension";

// contains all reducers
import rootReducer from './root-reducer';

// thunk
import thunk from "redux-thunk";

const middlewares = [thunk];

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middlewares))
);

export default store;