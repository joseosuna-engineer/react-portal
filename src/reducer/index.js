/**
 *
 * Copyright 2017 Prottonne
 */

import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import  userReducer from './user-reducer';
import thunk from 'redux-thunk';
import  rentalReducer from './rental-reducer';

const reducers = combineReducers({
  user: userReducer,
  rental: rentalReducer
});

const middleware = applyMiddleware(thunk);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers,
  composeEnhancers( middleware )
);

export default store;
