/**
 *
 * Copyright 2017 Prottonne
 */

 import {
   SET_USER_EMAIL, SET_USER_PASSWORD, SET_USER_AUTH,
   AUTH_HEADER, LOGIN_PATH, AUTH_TOKEN_LOCAL_NAME
 } from '../action/action-const';
 import axios from 'axios';

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

 export const setUserAuth = (token) => {
   return {
     type: SET_USER_AUTH,
     payload: token
   };
 }

 export const setAuthToken = (token) => {
   if(token){
     axios.defaults.headers.common[AUTH_HEADER] = `Bearer ${token}`;
   }else {
     delete axios.defaults.headers.common[AUTH_HEADER];
   }
 }

 export const login = (user) => {
    return dispatch => {
      return axios.post(LOGIN_PATH, user)
       .then(
         (res) => {
           const token = res.data.token;
           localStorage.setItem(AUTH_TOKEN_LOCAL_NAME, token);
           setAuthToken(token);
           dispatch(setUserAuth(token));
         },
         (err) => {
           localStorage.removeItem(AUTH_TOKEN_LOCAL_NAME);
           setAuthToken();
           dispatch(setUserAuth());
         }
       );
    }
  }

  export const requiredAuth = (state) => {
    return dispatch => {
      if(!state.user.isAuth){
        state.history.push('/login');
      }
    }    
  }
