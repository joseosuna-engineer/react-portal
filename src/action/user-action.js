/**
 *
 * Copyright 2017 Prottonne
 */

 import {
   SET_USER_EMAIL, SET_USER_PASSWORD, SET_USER,
   AUTH_HEADER, LOGIN_PATH, AUTH_TOKEN_LOCAL_NAME,
   PROFILE_PATH
 } from '../action/action-const';
 import axios from 'axios';
 import jwtDecode from 'jwt-decode';

 /* MOCK AJAX CALL */
import MockAdapter from 'axios-mock-adapter';

let mock = new MockAdapter(axios);
mock.onPost(LOGIN_PATH).reply(200, {
 token:
 'eyJhbGciOiJIUzUxMiJ9.eyJqdGkiOiI0NDY4ZjBjMC1jZTNiLTQ3MTgtOWNkOC0zYjYxYWQwZjRkMDkiLCJpYXQiOjE0OTkyOTQ0MTMsImV4cCI6MTQ5OTI5NDcxMywidXNlciI6eyJpZCI6MTAxMDAxLCJmaXJzdE5hbWUiOiJKb2huIiwibGFzdE5hbWUiOiJEb2UiLCJhdXRoIjp0cnVlfX0.6nPTkjHPGy62C33IzjDFTW5ilTVUDiMCdk6bOeTBpWx5yXPNNLo5VosGMUvfJgdCxwT1SVgAuBmHjPIhFxXt3Q'
});
mock.onPost(PROFILE_PATH).reply(200, {
 user: {
        id: 'asd',
        firstName: 'peter',
        lastName: 'mark',
        email: 'smoth@hj.cl'
    }
});
/* MOCK AJAX CALL */

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

 export const setUser = (user) => {
   return {
     type: SET_USER,
     payload: user
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
     dispatch(setUser({}));
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
           dispatch(setUser(jwtDecode(token).user));
         },
         (err) => {
           localStorage.removeItem(AUTH_TOKEN_LOCAL_NAME);
           setAuthToken(false);
         }
       );
    }
  }

  export const goHome = (state) => {
    return dispatch => {
        if(state.user.auth){
          state.history.push('/');
        }
     }
  }

  export const requiredAuth = (state) => {
    return dispatch => {
      if(!state.user.auth){
        state.history.push('/login');
      }
    }
  }

  export const getProfile = (state) => {
     return dispatch => {
       return axios.post(PROFILE_PATH, state.user)
        .then(
          (res) => {
          //  dispatch(setUserFirstName(res.data.user.firstName));
        //    dispatch(setUserLastName(res.data.user.lastName));
          },
          (err) => {
            if(err.response.data.message==='101'){
              dispatch(logout(state.history));
            }
          }
        );
     }
   }
