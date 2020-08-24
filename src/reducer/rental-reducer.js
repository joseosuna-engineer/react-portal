/**
 *
 * Copyright 2017 Prottonne
 */

 import {
   SET_RENTAL_INCOME, SET_RENTAL_ADDRESS, SET_RENTAL_VALUE
 } from '../action/action-const';

 const initialState = {
   income:'360.000',
   address:'Santa Isabel 71, Santiago RM',
   value:'2.100',
   tax:'46.000',
   insurance:'0',
   commonexpenses:'0',
   vacancy:'27.000',
   repairs:'40.000',
   maintenance:'0',
   mortgage:'225.485',
   expenses:'338.482'
 };

export default function rentalReducer(state=initialState, action) {
  switch (action.type) {
    case SET_RENTAL_INCOME:
      state = {...state, income: action.payload}
      break;

    case SET_RENTAL_ADDRESS:
      state = {...state, address: action.payload}
      break;

    case SET_RENTAL_VALUE:
      state = {...state, value: action.payload}
      break;

    default:
      state = {...state}
  }
  return state;
}
