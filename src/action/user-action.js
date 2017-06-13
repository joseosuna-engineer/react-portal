/**
 *
 * Copyright 2017 Prottonne
 */

 import {
   SET_USER_EMAIL, SET_USER_PASSWORD
 } from '../action/action-const';

 export const setUserEmail = (email) => {
   return {
     type: SET_USER_EMAIL,
     payload: email
   }
 }

 export const setUserPassword = (password) => {
   return {
     type: SET_USER_PASSWORD,
     payload: password
   }
 }
