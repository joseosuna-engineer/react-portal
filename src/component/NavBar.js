/**
 *
 * Copyright 2017 Prottonne
 */

import React, { Component } from 'react';
import { Link } from 'react-router-dom';

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
              <Link onClick={this.onClick} to="/">
                <div className={
                  (this.state.activeTabClassName === 'rental-icon')
                    ? 'rental-icon active':'rental-icon'
                  } ></div>
              </Link>
            </div>
            <div className="col">
              <Link onClick={this.onClick} to="/search">
                <div className={
                  (this.state.activeTabClassName === 'search-icon')
                    ? 'search-icon active':'search-icon'
                  } ></div>
              </Link>
            </div>
            <div className="col">
              <Link onClick={this.onClick} to="/invest">
              <div className={
                (this.state.activeTabClassName === 'invest-icon')
                  ? 'invest-icon active':'invest-icon'
                } ></div>
              </Link>
            </div>
            <div className="col">
              <Link onClick={this.onClick} to="/settings">
              <div className={
                (this.state.activeTabClassName === 'settings-icon')
                  ? 'settings-icon active':'settings-icon'
                } ></div>
              </Link>
            </div>
            <div className="col">
              <Link onClick={this.logout} to="/logout">
                <div className="exit-icon"></div>
              </Link>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
