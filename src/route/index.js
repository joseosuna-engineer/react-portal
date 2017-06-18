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
import { hashHistory, Route, HashRouter } from 'react-router-dom';
import store from '../reducer';
import  LoginPage  from '../route/LoginPage';
import  HomePage  from '../container/home-page-container';
require('../style/navbar.css');

export default class IndexPage extends Component {
  render(){
    return(
      <Provider store={store}>
        <HashRouter history={hashHistory}>
          <div>
            <Route exact={true} path='/' component={HomePage} />
            <Route exact={true} path='/login' component={LoginPage} />
          </div>
        </HashRouter>
      </Provider>
    );
  }
}
