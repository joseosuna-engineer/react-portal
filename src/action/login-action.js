/**
 *
 * Copyright 2017 Prottonne
 */

import axios from 'axios';

const HOST = 'https://reqres.in';

 export const login = (user) => {
   return dispatch => {
     return axios.post(HOST+'/api/login', user);
   }
 }
