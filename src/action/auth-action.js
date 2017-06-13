/**
 *
 * Copyright 2017 Prottonne
 */

import axios from 'axios';
import {
  AUTH_HEADER, LOGIN_PATH, AUTH_TOKEN_LOCAL_NAME
} from '../action/action-const';

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
        }
      );
   }
 }
