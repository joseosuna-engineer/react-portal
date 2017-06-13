/**
 *
 * Copyright 2017 Prottonne
 */

import { createStore, combineReducers, applyMiddleware } from 'redux';
import  userReducer from './user-reducer';
import thunk from 'redux-thunk';

const reducers = combineReducers({
  user: userReducer
});

const middleware = applyMiddleware(thunk);

const store = createStore(reducers, middleware);

export default store;
