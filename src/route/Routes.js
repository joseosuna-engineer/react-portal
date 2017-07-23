/**
 *
 * Copyright 2017 Prottonne
 */

import React, { Component } from 'react';
import {
  Route
} from 'react-router-dom';
import MyRentalROI from './MyRentalROI';
import MySettings from '../container/my-settings-container';
import NavBar from '../container/nav-bar-container';
import MyInvestments from './MyInvestments';
import Search from './Search';
import Header from '../component/Header';
import {
  RENTAL_NAV_PATH, SEARCH_NAV_PATH, INVESTMENT_NAV_PATH,
  SETTINGS_NAV_PATH
} from '../action/action-const';

export default class Routes extends Component {
  componentWillMount() {
    this.props.requiredAuth(this.props);
  }
  render(){
    return(
      <div>
        <Header history={this.props.history} />
        <NavBar history={this.props.history} />
        <Route exact path={RENTAL_NAV_PATH} component={MyRentalROI}/>
        <Route exact path={SETTINGS_NAV_PATH} component={MySettings}/>
        <Route exact path={INVESTMENT_NAV_PATH} component={MyInvestments}/>
        <Route exact path={SEARCH_NAV_PATH} component={Search}/>
      </div>
    );
  }
}
