/**
 *
 * Copyright 2017 Prottonne
 */

import React, { Component } from 'react';
import Logo from '../component/Logo';

export default class NavBar extends Component {

  render(){
    return(
      <div>
      <nav className="navbar fixed-bottom navbar-light bg-faded">
        <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <a className="navbar-brand" href="#">
          <div className="d-inline-block align-top logo-nav">
            <Logo />
          </div>
        </a>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a className="nav-link" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Activity</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Settings</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Profile</a>
            </li>
          </ul>
        </div>
        </nav>
      </div>
    );
  }
}
