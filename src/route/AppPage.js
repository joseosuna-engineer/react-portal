/**
 *
 * Copyright 2017 Prottonne
 */

import React, { Component } from 'react';
import {
  HashRouter as Router,
  Route
} from 'react-router-dom';
import Routes from '../container/routes-container';
import LoginPage from './LoginPage';
import {
  LOGIN_NAV_PATH
} from '../action/action-const';

export default class AppPage extends Component {
  render(){
    return(
      <Router>
        <div>
          <Route exact path="/(settings|search|invest)?" component={Routes}/>
          <Route exact path={LOGIN_NAV_PATH} component={LoginPage}/>
        </div>
      </Router>
    );
  }
}
