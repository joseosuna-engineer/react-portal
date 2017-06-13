/**
 *
 * Copyright 2017 Prottonne
 */

import axios from 'axios';

const HOST = 'https://reqres.in';

const setAuthToken = (token) => {
  if(token){
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  }else {
    delete axios.defaults.headers.common['Authorization'];
  }
}

 export const login = (user) => {
   return dispatch => {
     return axios.post(HOST+'/api/login', user)
      .then(
        (res) => {
          const token = res.data.token;
          localStorage.setItem('jwtToken', token);
          setAuthToken(token);
        }
      );
   }
 }
