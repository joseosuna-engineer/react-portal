/**
 *
 * Copyright 2017 Prottonne
 */

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  RENTAL_NAV_PATH, SEARCH_NAV_PATH, INVESTMENT_NAV_PATH,
  SETTINGS_NAV_PATH, LOGOUT_NAV_PATH
} from '../action/action-const';

export default class NavBar extends Component {
  constructor(props){
    super(props);
    this.state={
      activeTabClassName:"rental-icon"
    }
    this.logout = this.logout.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  logout(e){
    e.preventDefault();
    this.props.logout(this.props.history);
  }

  onClick(e){
    this.setState({activeTabClassName:e.target.className});
  }

  render(){
    return(
      <div className="fixed-bottom nav-bar-icon">
        <nav className="navbar">
          <div className="row">
            <div className="col">
              <Link onClick={this.onClick} to={RENTAL_NAV_PATH}>
                <div className={
                  (this.state.activeTabClassName === 'rental-icon')
                    ? 'rental-icon active':'rental-icon'
                  } ></div>
              </Link>
            </div>
            <div className="col">
              <Link onClick={this.onClick} to={SEARCH_NAV_PATH}>
                <div className={
                  (this.state.activeTabClassName === 'search-icon')
                    ? 'search-icon active':'search-icon'
                  } ></div>
              </Link>
            </div>
            <div className="col">
              <Link onClick={this.onClick} to={INVESTMENT_NAV_PATH}>
              <div className={
                (this.state.activeTabClassName === 'invest-icon')
                  ? 'invest-icon active':'invest-icon'
                } ></div>
              </Link>
            </div>
            <div className="col">
              <Link onClick={this.onClick} to={SETTINGS_NAV_PATH}>
              <div className={
                (this.state.activeTabClassName === 'settings-icon')
                  ? 'settings-icon active':'settings-icon'
                } ></div>
              </Link>
            </div>
            <div className="col">
              <Link onClick={this.logout} to={LOGOUT_NAV_PATH}>
                <div className="exit-icon"></div>
              </Link>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
