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

export default class IndexPage extends Component {
  render(){
    return(
      <Provider store={store}>
        <AppPage />
      </Provider>
    );
  }
}
