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

export default class AppPage extends Component {
  render(){
    return(
      <Router>
        <div>
          <Route exact path="/" component={Routes}/>
          <Route exact path="/login" component={LoginPage}/>
        </div>
      </Router>
    );
  }
}
