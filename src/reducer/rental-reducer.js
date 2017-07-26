/**
 *
 * Copyright 2017 Prottonne
 */

 import {
   SET_RENTAL_INCOME, SET_RENTAL_ADDRESS, SET_RENTAL_SETTINGS
 } from '../action/action-const';

 const initialState = {
   income:'360.000',
   address:'Santa Isabel 71, Santiago RM',
   settings:'1D + 1B'
 };

export default function rentalReducer(state=initialState, action) {
  switch (action.type) {
    case SET_RENTAL_INCOME:
      state = {...state, income: action.payload}
      break;

    case SET_RENTAL_ADDRESS:
      state = {...state, address: action.payload}
      break;

    case SET_RENTAL_SETTINGS:
      state = {...state, settings: action.payload}
      break;

    default:
      state = {...state}
  }
  return state;
}
