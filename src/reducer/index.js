/**
 *
 * Copyright 2017 Prottonne
 */

import { createStore, combineReducers, applyMiddleware } from 'redux';
import  userReducer from './user-reducer';
import thunk from 'redux-thunk';
import  authReducer from './auth-reducer';

const reducers = combineReducers({
  user: userReducer,
  auth: authReducer
});

const middleware = applyMiddleware(thunk);

const store = createStore(reducers, middleware);

export default store;
