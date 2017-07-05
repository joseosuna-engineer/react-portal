/**
 *
 * Copyright 2017 Prottonne
 */

import React, { Component } from 'react';
import { Provider } from 'react-redux';
global.jQuery = require('jquery');
global.Tether = require('tether');
global.Bootstrap = require('bootstrap');
require('bootstrap/dist/css/bootstrap.min.css');
require('../style/signin.css');
import store from '../reducer';
require('../style/navbar.css');
import AppPage from './AppPage';
import { setAuthToken, setUser } from '../action/user-action';
import { AUTH_TOKEN_LOCAL_NAME } from '../action/action-const';
import jwtDecode from 'jwt-decode';

export default class IndexPage extends Component {
  componentWillMount() {
    let token = localStorage.getItem(AUTH_TOKEN_LOCAL_NAME);
    if(token){
      setAuthToken(token);
      store.dispatch(setUser(jwtDecode(token).user));
    }
  }
  render(){
    return(
      <Provider store={store}>
        <AppPage />
      </Provider>
    );
  }
}
