/**
 *
 * Copyright 2017 Prottonne
 */

 import {
   SET_RENTAL_INCOME, SET_RENTAL_ADDRESS, SET_RENTAL_VALUE
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

 export const setRetalValue = (value) => {
   return {
     type: SET_RENTAL_VALUE,
     payload: value
   };
 }
