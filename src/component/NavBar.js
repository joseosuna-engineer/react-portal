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
      activeTabClassName:"insurance-icon"
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
        <nav className="navbar navbar-light bg-faded">
          <div className="row">
            <div className="col">
              <Link onClick={this.onClick} to="/">
                <div className={
                  (this.state.activeTabClassName === 'insurance-icon')
                    ? 'insurance-icon active':'insurance-icon'
                  } ></div>
              </Link>
            </div>
            <div className="col">
              <Link onClick={this.onClick} to="/claim">
              <div className={
                (this.state.activeTabClassName === 'claim-icon')
                  ? 'claim-icon active':'claim-icon'
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
