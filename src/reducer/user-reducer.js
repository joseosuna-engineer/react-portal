/**
 *
 * Copyright 2017 Prottonne
 */

 import {
   SET_USER_EMAIL, SET_USER_PASSWORD, SET_USER_AUTH
 } from '../action/action-const';
 import isEmpty from 'lodash/isEmpty';

 const initialState = {
  isAuth: false
 };

export default function userReducer(state=initialState, action) {
  switch (action.type) {
    case SET_USER_EMAIL:
      state = {...state, email: action.payload}
      break;

    case SET_USER_PASSWORD:
      state = {...state, password: action.payload}
      break;

    case SET_USER_AUTH:
      state = {...state, isAuth: !isEmpty(action.payload)}
      break;

    default:
      state = {...state}
  }
  return state;
}
