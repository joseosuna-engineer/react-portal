/**
 *
 * Copyright 2017 Prottonne
 */

import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class NavBar extends Component {
  constructor(props){
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick(e){
    e.preventDefault();
    this.props.logout(this.props.history);
  }
  render(){
    return(
      <div className="fixed-bottom nav-bar-icon">
        <nav className="navbar navbar-light bg-faded">
          <div className="row">
            <div className="col">
              <Link to="/">
                <div className="small-icon insurance-icon"></div>
              </Link>
            </div>
            <div className="col">
              <Link to="/claim">
                <div className="small-icon claim-icon"></div>
              </Link>
            </div>
            <div className="col">
              <Link to="/settings">
                <div className="small-icon settings-icon"></div>
              </Link>
            </div>
            <div className="col">
              <Link onClick={this.onClick} to="/logout">
                <div className="small-icon exit-icon"></div>
              </Link>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
