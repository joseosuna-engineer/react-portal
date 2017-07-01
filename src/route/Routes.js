/**
 *
 * Copyright 2017 Prottonne
 */

import React, { Component } from 'react';
import {
  Route
} from 'react-router-dom';
import MyInsurances from '../component/MyInsurances';
import MySettings from '../component/MySettings';
import NavBar from '../component/NavBar';

export default class Routes extends Component {
  componentWillMount() {
   this.props.requiredAuth(this.props);
  }
  render(){
    return(
      <div>
        <NavBar />
        <Route exact path="/" component={MyInsurances}/>
        <Route exact path="/settings" component={MySettings}/>
      </div>
    );
  }
}
