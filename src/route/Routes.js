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

export default class Routes extends Component {
  componentWillMount() {
    this.props.requiredAuth(this.props);
  }
  render(){
    return(
      <div>
        <Header />
        <NavBar history={this.props.history} />
        <Route exact path="/" component={MyRentalROI}/>
        <Route exact path="/settings" component={MySettings}/>
        <Route exact path="/invest" component={MyInvestments}/>
        <Route exact path="/search" component={Search}/>
      </div>
    );
  }
}
