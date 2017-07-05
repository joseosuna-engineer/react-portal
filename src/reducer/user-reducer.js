/**
 *
 * Copyright 2017 Prottonne
 */

 import {
   SET_USER_EMAIL, SET_USER_PASSWORD, SET_USER
 } from '../action/action-const';

 const initialState = {
 };

export default function userReducer(state=initialState, action) {
  switch (action.type) {
    case SET_USER_EMAIL:
      state = {...state, email: action.payload}
      break;

    case SET_USER_PASSWORD:
      state = {...state, password: action.payload}
      break;

    case SET_USER:
      state = action.payload
      break;

    default:
      state = {...state}
  }
  return state;
}
