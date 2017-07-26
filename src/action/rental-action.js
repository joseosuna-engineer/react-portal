/**
 *
 * Copyright 2017 Prottonne
 */

 import {
   SET_RENTAL_INCOME, SET_RENTAL_ADDRESS, SET_RENTAL_SETTINGS
 } from './action-const';


 export const setRentalAddress = (address) => {
   return {
     type: SET_RENTAL_ADDRESS,
     payload: address
   }
 }

 export const setRentalIncome = (income) => {
   return {
     type: SET_RENTAL_INCOME,
     payload: income
   }
 }

 export const setRetalSettings = (settings) => {
   return {
     type: SET_RENTAL_SETTINGS,
     payload: settings
   };
 }
