/**
 *
 * Copyright 2017 Prottonne
 */

 import {
   SET_USER_EMAIL, SET_USER_PASSWORD, SET_USER_AUTH,
   AUTH_HEADER, LOGIN_PATH, AUTH_TOKEN_LOCAL_NAME,
   PROFILE_PATH, SET_USER_FIRST_NAME, SET_USER_LAST_NAME
 } from '../action/action-const';
 import axios from 'axios';
 import jwtDecode from 'jwt-decode';

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

 export const setUserFirstName = (firstName) => {
   return {
     type: SET_USER_FIRST_NAME,
     payload: firstName
   };
 }

 export const setUserLastName = (lastName) => {
   return {
     type: SET_USER_LAST_NAME,
     payload: lastName
   };
 }

 export const setAuthToken = (token) => {
   if(token){
     axios.defaults.headers.common[AUTH_HEADER] = `Bearer ${token}`;
   }else {
     delete axios.defaults.headers.common[AUTH_HEADER];
   }
 }

 export const logout = (history) => {
   return dispatch => {
     localStorage.removeItem(AUTH_TOKEN_LOCAL_NAME);
     setAuthToken(false);
     dispatch(setUserAuth());
     dispatch(setUserEmail());
     dispatch(setUserPassword());
     history.push('/login');
   }
 }

 export const login = (state) => {
    return dispatch => {
      return axios.post(LOGIN_PATH, state.user)
       .then(
         (res) => {
           const token = res.data.token;
           localStorage.setItem(AUTH_TOKEN_LOCAL_NAME, token);
           setAuthToken(token);
           dispatch(setUserAuth(jwtDecode(token)));
           dispatch(setUserPassword());
         },
         (err) => {
           dispatch(logout(state.history));
         }
       );
    }
  }

  export const goHome = (state) => {
    return dispatch => {
        if(state.user.isAuth){
          state.history.push('/');
        }
     }
  }

  export const requiredAuth = (state) => {
    return dispatch => {
      if(!state.user.isAuth){
        state.history.push('/login');
      }
    }
  }

  export const getProfile = (state) => {
     return dispatch => {
       return axios.post(PROFILE_PATH, state.user)
        .then(
          (res) => {
            dispatch(setUserFirstName(res.data.user.firstName));
            dispatch(setUserLastName(res.data.user.lastName));
          },
          (err) => {
            if(err.response.data.message==='101'){
              dispatch(logout(state.history));
            }
          }
        );
     }
   }
