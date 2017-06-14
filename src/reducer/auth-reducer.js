/**
 *
 * Copyright 2017 Prottonne
 */

 import {
   SET_AUTH_USER
 } from '../action/action-const';
 import isEmpty from 'lodash/isEmpty';

const initialState = {
  isAuth: false,
  user: {}
};

export default function authReducer(state=initialState, action = {}) {
  switch (action.type) {
    case SET_AUTH_USER:
      state = {
        isAuth: !isEmpty(action.payload),
        user: action.payload
      };
      break;

        default:
        state = {...state}
  }
  return state;
}
