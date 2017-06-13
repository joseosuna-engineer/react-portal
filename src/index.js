/**
 *
 * Copyright 2017 Prottonne
 */

import React from 'react';
import ReactDOM from 'react-dom';
import  IndexPage  from './route';
import {
  AUTH_TOKEN_LOCAL_NAME
} from './action/action-const';
import { setAuthToken } from './action/auth-action';

setAuthToken(localStorage.getItem(AUTH_TOKEN_LOCAL_NAME));

const app = document.getElementById('root');

ReactDOM.render(
  <IndexPage />
  ,
  app
);
