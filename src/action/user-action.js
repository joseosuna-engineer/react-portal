/**
 *
 * Copyright 2017 Prottonne
 */

 export const setUserEmail = (email) => {
   return {
     type: 'SET_USER_EMAIL',
     payload: email
   }
 }

 export const setUserPassword = (password) => {
   return {
     type: 'SET_USER_PASSWORD',
     payload: password
   }
 }
