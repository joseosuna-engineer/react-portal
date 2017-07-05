/**
 *
 * Copyright 2017 Prottonne
 */

import React, { Component } from 'react';
import {
  Route
} from 'react-router-dom';
import MyInsurances from '../container/profile-container';
import MySettings from '../container/profile-container-2';
import NavBar from '../container/nav-bar-container';

export default class Routes extends Component {
  componentWillMount() {
    this.props.requiredAuth(this.props);
  }
  render(){
    return(
      <div>
        <NavBar history={this.props.history} />
        <Route exact path="/" component={MyInsurances}/>
        <Route exact path="/settings" component={MySettings}/>
      </div>
    );
  }
}