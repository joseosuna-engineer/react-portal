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
import  HomePage  from '../route/HomePage';

class IndexPage extends Component {
  render(){
    return(
      <Provider store={store}>
        <HashRouter history={hashHistory}>
          <div>
            <Route exact={true} path='/' component={LoginPage} />
            <Route exact={true} path='/home' component={HomePage} />
          </div>
        </HashRouter>
      </Provider>
    );
  }
}

export default IndexPage;
