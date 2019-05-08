import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import app from './app/reducer';
import user from './user/reducer';

const rootReducer = combineReducers({
  app,
  user,
});

const composeEnhancers = applyMiddleware(thunk);

const store = createStore(rootReducer, composeEnhancers);

export default store;
