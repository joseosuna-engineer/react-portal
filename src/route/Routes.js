/**
 *
 * Copyright 2017 Prottonne
 */

import React, { Component } from 'react';
import {
  Route
} from 'react-router-dom';
import MyInsurances from './MyInsurances';
import MySettings from '../container/my-settings-container';
import NavBar from '../container/nav-bar-container';
import MyClaims from './MyClaims';

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
        <Route exact path="/claim" component={MyClaims}/>
      </div>
    );
  }
}
